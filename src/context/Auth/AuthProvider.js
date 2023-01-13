import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth=getAuth(app)
export const AuthContext=createContext(auth)
const AuthProvider = ({children}) => {
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
        signUp
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;