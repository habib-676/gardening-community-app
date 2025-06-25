import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";
import Swal from "sweetalert2";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign-Out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "An error oc",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  // google
  const provider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  // observer :
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    createUser,
    googleSignIn,
    logOutUser,
    user,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
