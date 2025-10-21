import {View, Text, StyleSheet, 
        TouchableOpacity, Switch} from 'react-native';

export default function Lembrete({item}){
    const dataFormatada = new Date(item.dataCriacao).toLocaleDateString('pt-BR');
    return(
        <View style={styles.itemContainer}>
            <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.conteudo}>{item.conteudo}</Text>
                <Text style={styles.data}>Criado em: {dataFormatada}</Text>
            </View>

            <View style={styles.acoesContainer}> 
                <Switch 
                    trackColor={{false : '#767577' , true : '#81b0ff'}}
                    thumbColor={item.finalizado ? '#f5dd4b' : '#f4f3f4'}
                    value = {item.finalizado} />                

                <TouchableOpacity style={styles.botaoEditar}>
                    <Text style={styles.textoBotao}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoApagar}>
                    <Text style={styles.textoBotao}>Apagar</Text>
                </TouchableOpacity>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15, backgroundColor: 'white', borderRadius: 5, marginBottom: 10, 
    }, infoContainer: {
        marginBottom: 10, 
    }, titulo: {
        fontSize: 18, fontWeight: 'bold'
    }, conteudo: {
        fontSize: 14, color: '#555', marginTop: 5,
    }, data: {
        fontSize: 12, color: '#999', marginTop: 10,
    }, acoesContainer: {
        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', 
        borderTopWidth: 1, borderTopColor: '#eee',
    }, botaoEditar: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5,backgroundColor: '#007bff', 
        marginLeft: 5,
    }, botaoApagar: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, backgroundColor: '#dc3545',
        marginLeft: 5,
    }, textoBotao: {
        color: 'white', fontWeight: 'bold'
    }
});