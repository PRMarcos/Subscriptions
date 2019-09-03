import { app } from "./firebase";
import { ValidateKid } from "../Models/Kid";

const Db = app.firestore();
const auth = app.auth();

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
      throw new Error(err.code);
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

async function Login(email, password) {
  await auth.signInWithEmailAndPassword(email, password).catch(error => {
    console.log(error.code, " + ", error.message);
  });
}

async function LogOut() {
  await auth.signOut().catch(function(error) {
    console.log(error.code, " + ", error.message);
  });
}

export { Listar, Adicionar, Login, LogOut };
