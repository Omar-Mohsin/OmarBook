// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAF_zDjRxAM_fFooiUjqSRWt1xenW67GX0",
    authDomain: "app1-44e19.firebaseapp.com",
    projectId: "app1-44e19",
    storageBucket: "app1-44e19.appspot.com",
    messagingSenderId: "1073942946149",
    appId: "1:1073942946149:web:5f609317c5db785824018c",
    measurementId: "G-42T3NQLXZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account",

})


export const auth = getAuth();
export const db = getFirestore();



// this is for doc
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await setDoc(userDocRef, { displayName, email, createdAt})

        } catch (error) {
            console.log("error while creating a user ", error.message)
        }

    }
    return userDocRef;

}
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
