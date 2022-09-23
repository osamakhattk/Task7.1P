import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBCOlFnHpM_ZZwy5nIFPKI3bLo3xRkdsGo",
    authDomain: "deakin-login-3b123.firebaseapp.com",
    projectId: "deakin-login-3b123",
    storageBucket: "deakin-login-3b123.appspot.com",
    messagingSenderId: "638856214704",
    appId: "1:638856214704:web:c25cdc267cc8daace82375"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters ({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation) =>{
    if (!userAuth.email) return;
    const userDocRef = doc (db, 'users', userAuth.uid );
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists())

    if (! userSnapshot.exists()){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

    try{
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
        })
    }

    catch (error){
    console.log('error in creating ', error.message)
    }
}
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;

    return await createAuthUserWithEmailAndPassword(auth, email, password)
}
