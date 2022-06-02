import { initializeApp } from "firebase/app"

import{
    getFirestore, collection ,getDocs
}from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDEBKPjiXCYpaVtn4OjRj_CwZA0PdKW2DQ",
    authDomain: "fir-2-c5b6a.firebaseapp.com",
    projectId: "fir-2-c5b6a",
    storageBucket: "fir-2-c5b6a.appspot.com",
    messagingSenderId: "892745453939",
    appId: "1:892745453939:web:d1ac5549fa19c8ab4ab506",
    measurementId: "G-41E03G9BKS"
  };

  initializeApp(firebaseConfig)

  const db=getFirestore()

  const colRef = collection(db, "Libros")

  getDocs(colRef)
   .then((snapshot) => {
       let books = []
       console.log("linea 25 "+snapshot)
       snapshot.docs.forEach((doc) => {
           books.push({ ...doc.data(), id: doc.id })
       })
       console.log("se esta pasando por la linea 29")
       console.log(books) 
   })
   .catch(err => {
       console.log(err.message)
   })

