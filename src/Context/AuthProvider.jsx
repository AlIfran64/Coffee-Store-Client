import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Sign up
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);

  }


  // Sign in 
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


  // Delete current user

  const userDelete = () => {
    const user = auth.currentUser;
    return deleteUser(user);
  };

  const userData = {
    user,
    setUser,
    userSignUp,
    userSignIn,
    userDelete
  }
  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;