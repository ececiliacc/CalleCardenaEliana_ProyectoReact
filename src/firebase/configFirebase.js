// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_Jz9AEFk0tUgRIihYZtQoYpMJDrmXqc",
  authDomain: "caja-de-libros.firebaseapp.com",
  projectId: "caja-de-libros",
  storageBucket: "caja-de-libros.appspot.com",
  messagingSenderId: "393573667944",
  appId: "1:393573667944:web:cabe2fe0fc3e19bc6dd7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

////creando funcion que retorne app

export const inicializarFirebase = () => app