import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile 
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password, name) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name
        });
      });
  }

  function login(email, password) {
    // For demo purposes, allow any email/password combination
    // In production, you would use: return signInWithEmailAndPassword(auth, email, password);
    
    return new Promise((resolve) => {
      // Simulate successful login with any credentials
      setTimeout(() => {
        const mockUser = {
          uid: 'sufiyan123',
          email: email,
          displayName: 'Sufiyan Imran'
        };
        setCurrentUser(mockUser);
        resolve(mockUser);
      }, 500);
    });
  }

  function logout() {
    // For demo purposes, simply clear the current user
    // In production, you would use: return signOut(auth);
    setCurrentUser(null);
    return Promise.resolve();
  }

  useEffect(() => {
    // For demo purposes, just set loading to false
    // In production, you would use Firebase auth state listener
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}