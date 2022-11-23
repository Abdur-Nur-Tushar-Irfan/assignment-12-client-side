import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.init'



export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const UserContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    //for email and password
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }
    //for login

    const signIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    //for signOut
    const logOut = () => {
        return signOut(auth);
    }
    //for update user
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)

    }
    //sign in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        updateUserProfile,
        signInWithGoogle
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>
    );
};

export default UserContext;