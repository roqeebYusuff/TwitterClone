import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDV-ZMu9xnSKy6U-OZPbs-gQc6vSa2Lj_Q",
    authDomain: "twitter-clone-b9464.firebaseapp.com",
    projectId: "twitter-clone-b9464",
    storageBucket: "twitter-clone-b9464.appspot.com",
    messagingSenderId: "680477843733",
    appId: "1:680477843733:web:9a1128515bf32c57ccc91c"
};

// initialize firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp
const db = getFirestore()
const storage = getStorage()

export default app
export {db, storage}