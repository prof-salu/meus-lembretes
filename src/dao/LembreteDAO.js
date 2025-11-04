// ./src/dao/LembreteDAO.js --> Data Acess Object [Objeto de acesso aos dados]
//DAO -> Gerencia todas as atividades de MANIPULAÇÃO de dados (CRUD)

import { db } from '../../firebaseConfig';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc,
    doc, onSnapshot } from 'firebase/firestore';

//Cria a coleção no firebase chamada lembretes
const lembretesCollection = collection(db, 'lembretes');

//Grava os dados na coleçao
export function adicionar(lembrete){
    return addDoc(lembretesCollection, lembrete);
}

//Captura os dados no firebase [listener]
export function ouvirLembretes(callback){
    return onSnapshot(lembretesCollection, snapshot => {
        const lembretes = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
        callback(lembretes);
    })
}

//Apagar lembrete
export function apagar(id){
    const lembreteDoc = doc(db, 'lembretes', id);
    return deleteDoc(lembreteDoc);
}

export function atualizar(id, lembrete){
    const lembreteDoc = doc(db, 'lembretes', id);
    return updateDoc(lembreteDoc, lembrete);
}
