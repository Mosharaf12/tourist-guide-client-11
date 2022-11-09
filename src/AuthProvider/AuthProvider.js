import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading,setLoading]= useState(true)


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const googleSingPop=(provider)=>{
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
             console.log(currentUser);
             setUser(currentUser)
             setLoading(false)
         })
         return ()=>{
             return unsubscribe();
         }
     },[])




    const authInfo = {user,
        createUser,
        signIn,
        updateUser,
        googleSingPop
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;