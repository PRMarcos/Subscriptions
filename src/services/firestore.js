import { app } from "./firebase";
import { ValidateKid } from "../Models/Kid";

const Db = app.firestore();
const auth = app.auth();

async function Listar() {
  let dados = [];
  try {
    const snapshot = await Db.collection("Inscricoes").get();
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
    return dados;
  } catch (err) {
    throw new Error("Algo deu errado: " + err.code + " - " + err.message);
  }
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
  try {
    const Credential = await auth.signInWithEmailAndPassword(email, password);
    return Credential;
  } catch (error) {
    console.log(error.code, ": ", error.message);
    throw new Error("Erro ao logar: " + error.code + " - " + error.message);
  }
}

async function LogOut() {
  try {
    await auth.signOut();
  } catch (error) {
    console.log(error.code, ": ", error.message);
    throw new Error("Erro no Logout: " + error.code + " - " + error.message);
  }
}

export { Listar, Adicionar, Login, LogOut };
