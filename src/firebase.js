import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {initializeFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDDXLVLhOrfgeTY5V30PvcGbLGlbJBH9ns",
  authDomain: "summercamp-f4076.firebaseapp.com",
  projectId: "summercamp-f4076",
  storageBucket: "summercamp-f4076.appspot.com",
  messagingSenderId: "669647468051",
  appId: "1:669647468051:web:23b5c705c0cb47072d31e6",
  measurementId: "G-N9RG1LCL6Q"
};
 
  const firebase = initializeApp(firebaseConfig)
  export const storage = getStorage(firebase)
  export const db = initializeFirestore(firebase , {experimentalForceLongPolling: true ,}) 
  export default firebase;
  