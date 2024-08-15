import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDxlXh__Psedv_Xb3uwas0sTXYyhqOtXaM",
  authDomain: "sujeito-946f6.firebaseapp.com",
  projectId: "sujeito-946f6",
  storageBucket: "sujeito-946f6.appspot.com",
  messagingSenderId: "905060380078",
  appId: "1:905060380078:web:40f93684af754199e26c3f",
  measurementId: "G-FMEB7BPF0H"
  };

  const firebaseapp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseapp);
  const auth = getAuth(firebaseapp)

  export { db, auth };