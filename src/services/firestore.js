import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "../services/firebaseConfig";
import { ValidateKid } from "../Models/Kid";

firebase.initializeApp(firebaseConfig);

const Db = firebase.firestore();

async function Listar() {
  let dados = [];
  await Db.collection("Inscricoes")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const form = doc.data();
        const obj = {
          _id: doc.id,
          KidName: form.KidName,
          KidChurch: form.KidChurch,
          KidAge: form.KidAge,
          KidCity: form.KidCity,
          KidParent: form.KidParent,
          Phone: form.Phone,
          KidObs: form.KidObs,
          PaymentDay: form.PaymentDay
        };
        dados.push(obj);
      });
    })
    .catch(err => {
      dados = [];
      throw new Error("Servidor indisponivel");
    });
  return dados;
}

async function Adicionar(insc) {
  let response;
  if (ValidateKid(insc)) {
    await Db.collection("Inscricoes")
      .add(insc)
      .then(docRef => {
        console.log("sucesso: " + docRef.id);
        response = true;
      })
      .catch(error => {
        console.log("Erro: " + error);
        response = false;
      });
  } else {
    response = false;
  }
  return response;
}

function CurrentUser() {
  return firebase.auth().currentUser;
}

async function Login(email, password) {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("logado!");
    })
    .catch(function(error) {
      console.log(error.message);
    });
}

async function LogOut() {
  await firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Deslogado!");
    })
    .catch(function(error) {
      console.log(error.code, " + ", error.message);
    });
}

export { Listar, Adicionar, Login, LogOut, CurrentUser };
