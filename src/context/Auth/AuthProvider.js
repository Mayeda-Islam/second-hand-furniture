import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth=getAuth(app)
export const AuthContext=createContext(auth)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState({})
    const[loading,setLoading]=useState(true)
    // sign up
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in
   const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
   }
//    log out
const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
//   google sign in

const signInWithGoogle=(googleProvider)=>{
   return signInWithPopup(auth, googleProvider)
  
}

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      fetch(`http://localhost:5000/users-by-email/${currentUser.email}`)
        .then(res=>res.json())
        .then(data=>{
          if(data.status){
            setUser(data.user)
          }
        })
      
      setLoading(false);
    });
    return ()=>unsubscribe();
  }, []);
    const authInfo={
        signUp,signIn,user,loading,logOut,signInWithGoogle,setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;