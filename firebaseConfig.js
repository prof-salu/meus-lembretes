//firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAM7jXdpSq8tYFb0MHvbVvrrdDbQI-dCPU",
  authDomain: "meus-lembretes-64b95.firebaseapp.com",
  projectId: "meus-lembretes-64b95",
  storageBucket: "meus-lembretes-64b95.firebasestorage.app",
  messagingSenderId: "275798946159",
  appId: "1:275798946159:web:d68d80848c288314c7389a",
  measurementId: "G-KTY8SPH2V2"
};

//Inicializa o firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);