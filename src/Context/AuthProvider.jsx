import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";


const userAuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    const logIn = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        await updateDoc(doc(db, 'Users', auth.currentUser.uid), {
            isOnline: true,
        })
        setUser(result);
        return result;
    }

    const signUp = async (email, password) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        setUser(result)
        return result;
    }

    const logOut = async () => {
        // await updateDoc(doc(db, 'Users', auth.currentUser.uid), {
        //     isOnline: false,
        // })
        const result = await signOut(auth);
        return result;
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(() => currentuser);
            console.log("currentuser", currentuser);
        });
        console.log("On auth state change", user);
        return () => {
            unsubscribe();
        };
    }, []);

    

    return (
        <userAuthContext.Provider
            value={{ user, setUser, logIn, signUp, logOut, googleSignIn, progress, setProgress, loading, setLoading }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

function useAuth() {
    return useContext(userAuthContext);
}

export { useAuth, AuthProvider }