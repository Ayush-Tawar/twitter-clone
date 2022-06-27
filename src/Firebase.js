import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyAU5h-B_qL8XSsNyapa1mhTZVitZkvppiM",
    authDomain: "twitter-968a8.firebaseapp.com",
    projectId: "twitter-968a8",
    storageBucket: "twitter-968a8.appspot.com",
    messagingSenderId: "129898538873",
    appId: "1:129898538873:web:d1a8db53a0bbfeaa2431a8",
    measurementId: "G-904HECFW6L"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp)
  // var cityList
  async function getCities(db) {
    const citiesCol = collection(db, 'posts');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }

  export {db,getCities};