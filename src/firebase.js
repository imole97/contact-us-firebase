import { initializeApp } from "firebase/app";
import {getDatabase, push, ref} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBqGjwzesaq4RS3LWMvSjsR8jxYpvzkv5o",
  authDomain: "contact-form-be3ec.firebaseapp.com",
  projectId: "contact-form-be3ec",
  storageBucket: "contact-form-be3ec.appspot.com",
  messagingSenderId: "1026956281543",
  appId: "1:1026956281543:web:7420948dad2995ee29a0e2"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)


export const getContactUsData = (name, email, subject, message) => {
  push(ref(db, 'contacts'),{
    username: name,
    email: email,
    subject: subject,
    message: message
  })
}


