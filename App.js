import { StyleSheet, Text, View, SafeAreaView, TextInput, 
         FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';  
import Lembrete from './src/componentes/Lembrete';
import * as LembreteDAO from './src/dao/LembreteDAO';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [editando, setEditando] = useState(null);
  const [lembretes, setLembretes] = useState([]);

  useEffect(() => {
    const unsubscribe = LembreteDAO.ouvirLembretes(setLembretes);
    return() => unsubscribe();
  }, [])

  async function gravarLembrete(){
    if(titulo.trim() === ''|| conteudo.trim() === ''){
      return;
    }

    if(editando != null){
      const lembreteEditado = {
        ...editando,
        titulo : titulo,
        conteudo : conteudo
      }

      await LembreteDAO.atualizar(lembreteEditado.id, lembreteEditado);
      }else{
      const novoLembrete = {
        titulo : titulo,
        conteudo : conteudo,
        dataCriacao : Date.now(),
        finalizado : false
      }  
      await LembreteDAO.adicionar(novoLembrete);
    }
    setEditando(null);
    setTitulo('');
    setConteudo('');    
  }

  async function apagarLembrete(id){
    await LembreteDAO.apagar(id);
  }

  function editarLembrete(lembrete){
    setTitulo(lembrete.titulo);
    setConteudo(lembrete.conteudo);
    setEditando(lembrete);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.titulo}>Meus Lembretes</Text>
        <TextInput placeholder='Título' style={styles.input}
                   value={titulo} onChangeText={setTitulo}/>

        <TextInput placeholder='Conteúdo' style={styles.input}
                   value={conteudo} onChangeText={setConteudo}/>

        <Button title='Gravar' onPress={gravarLembrete}/>
      </View>

      <FlatList 
        data={lembretes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Lembrete item={item} onApagar={apagarLembrete} onEditar={editarLembrete}/>
        )}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', padding: 20,
  }, titulo: {
    fontSize: 24, fontWeight: 'bold', textAlign: 'center',
    marginBottom: 20,
  }, inputContainer: {
    padding: 15, backgroundColor: 'white', borderRadius: 5, 
    marginBottom: 20,
  }, input: {
    height: 40, borderColor: 'gray', borderWidth: 1,
    marginBottom: 10, paddingHorizontal: 10, borderRadius: 5,
  }
});
