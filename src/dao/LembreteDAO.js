// ./src/dao/LembreteDAO.js --> Data Acess Object [Objeto de acesso aos dados]
//DAO -> Gerencia todas as atividades de MANIPULAÇÃO de dados (CRUD)

import { db } from '../../firebaseConfig';
import { getFirestore, collection, addDoc, updateDoc, deleteDoc,
    doc, onSnapshot } from 'firebase/firestore';

//Cria a coleção no firebase chamada lembretes
const lembretesCollection = collection(db, 'lembretes');

//Grava os dados na coleçao
export function adicionar(lembrete){
    return addDoc(lembretesCollection, {lembrete});
}