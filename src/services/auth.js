import React, { useEffect, useState } from "react";
import { GetState } from "./firestore";

import { app } from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [EnconstristasIsClosed, setEnconstristasClosed] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);



  useEffect(() => {
    app.firestore().collection("Setup").doc("Encontristas").onSnapshot(snapshot => { setEnconstristasClosed(snapshot.data().closed) }, err => { console.log(err) });
    GetState("Encontristas").then(res => { setEnconstristasClosed(res.closed) })
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser, EnconstristasIsClosed, setEnconstristasClosed }}>
      {children}
    </AuthContext.Provider>
  );
};
