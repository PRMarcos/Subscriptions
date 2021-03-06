import { app } from "./firebase";
import { ValidateKid } from "../Models/Kid";
import { validateForm } from "../Models/Encontreiro";

const Db = app.firestore();
const auth = app.auth();

async function excluir(collection, id) {
  var docRef = Db.collection(collection).doc(id);

  try {
    const doc = await docRef.get();

    if (doc.exists) {
      doc.ref.delete();
    } else {
      throw new Error("Documento nao encontrado");
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function Listar(enc) {
  let dados = [];
  let obj = {};
  try {
    const snapshot = await Db.collection(enc).get();
    snapshot.forEach(doc => {
      const form = doc.data();

      if (enc === "Inscricoes") {
        obj = arrangeKid(doc.id, form);
      } else {
        obj = arrangeEnc(doc.id, form);
      }

      dados.push(obj);
    });
    return dados;
  } catch (err) {
    throw new Error("Algo deu errado: " + err.code + " - " + err.message);
  }
}

function arrangeKid(id, data) {
  return {
    _id: id,
    KidName: data.KidName,
    KidChurch: data.KidChurch,
    KidAge: data.KidAge,
    KidCity: data.KidCity,
    KidParent: data.KidParent,
    Phone: data.Phone,
    KidObs: data.KidObs,
    PaymentDay: data.PaymentDay
  };
}

function arrangeEnc(id, data) {
  return {
    _id: id,
    Name: data.Name,
    Church: data.Church,
    Age: data.Age,
    City: data.City,
    Phone: data.Phone,
    PaymentDay: data.PaymentDay
  };
}

async function AdicionarEncontreiro(insc) {
  try {
    if (Object.keys(validateForm(insc)).length === 0) {
      const docRef = await Db.collection("Encontreiros").add(insc);
      return docRef;
    } else {
      throw new Error("Dados preenchidos invalidos");
    }
  } catch (error) {
    throw new Error("Erro ao adicionar: " + error.message);
  }
}

async function CloseSubs(Type) {
  try {
    await Db.collection("Setup").doc(Type).set({ closed: true });
  } catch (error) {
    throw new Error("Erro ao fechar inscrição: " + error.message);
  }
}

async function OpenSubs(Type) {
  try {
    await Db.collection("Setup").doc(Type).set({ closed: false });
  } catch (error) {
    throw new Error("Erro ao fechar inscrição: " + error.message);
  }
}

async function GetState(Type) {
  try {
    const docRef = await Db.collection("Setup").doc(Type).get()
    return docRef.data();
  } catch (error) {
    throw new Error("Erro ao fechar inscrição: " + error.message);
  }
}



async function Adicionar(insc) {
  try {
    if (Object.keys(ValidateKid(insc)).length === 0) {
      const docRef = await Db.collection("Inscricoes").add(insc);
      return docRef;
    } else {
      throw new Error("Dados preenchidos invalidos");
    }
  } catch (error) {
    throw new Error("Erro ao adicionar: " + error.message);
  }
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

export { Listar, Adicionar, Login, LogOut, AdicionarEncontreiro, excluir, CloseSubs, OpenSubs, GetState };
