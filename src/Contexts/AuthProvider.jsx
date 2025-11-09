import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.in";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const AuthProvider = ({ children }) => {

  const creatUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    creatUser,
    signInUser
  }
  return (
    <AuthContext value={userInfo}>
    {children}
    </AuthContext>
  )
};

export default AuthProvider;



