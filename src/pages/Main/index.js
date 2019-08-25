import React, { useState } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useForm } from "../../services/hooks";
import { NavBar } from "../../components/NavBar";
import { Adicionar } from "../../services/firestore";
import "./Main.css";

export function Main({ history }) {
  const [ok, setOk] = useState(false);
  const initialState = {
    KidName: "",
    KidChurch: "",
    KidAge: "",
    KidCity: "",
    KidParent: "",
    Phone: "",
    KidObs: "",
    PaymentDay: ""
  };

  const validateKidsForm = values => {
    let errors = {};

    if (values.KidName.trim() === "") {
      errors.KidName = "Nome precisa ser preenchido";
    }

    if (values.KidChurch.trim() === "") {
      errors.KidChurch = "Igreja precisa ser preenchida";
    }

    if (values.KidAge.trim() === "") {
      errors.KidAge = "Idade precisa ser preenchida";
    }

    if (values.KidCity.trim() === "") {
      errors.KidCity = "Cidade precisa ser preenchida";
    }

    if (values.KidParent.trim() === "") {
      errors.KidParent = "Responsável precisa ser preenchido";
    }

    if (values.Phone.trim() === "") {
      errors.Phone = "Telefone precisa ser preenchido";
    }

    if (values.PaymentDay.trim() === "") {
      errors.PaymentDay = "Data de pagamento precisa ser preenchida";
    }
    return errors;
  };

  async function SaveData() {
    const response = await Adicionar({
      KidName: values.KidName,
      KidChurch: values.KidChurch,
      KidAge: values.KidAge,
      KidCity: values.KidCity,
      KidParent: values.KidParent,
      Phone: values.Phone,
      KidObs: values.KidObs,
      PaymentDay: values.PaymentDay
    });

    return response;
  }

  function notyfyError(err) {
    let msgError = "";
    if (Object.keys(err).length === 0) {
      NotificationManager.success("Inscrição enviada", "Sucesso!");
    } else {
      if (Object.keys(err).length <= 3) {
        Object.keys(err).forEach(erro => {
          msgError = msgError + err[erro.valueOf()] + "  ";
        });
      } else {
        msgError = "Existem dados obrigatórios não preenchidos";
      }
      NotificationManager.error(msgError, "Erro!");
    }
  }

  const { values, errors, onChange, onSubmit } = useForm(
    SaveData,
    initialState,
    validateKidsForm,
    notyfyError
  );
  const aviso =
    "Sobre o pagamento: Para garantir a vaga e preciso uma entrada de 40 reais e o restante pode ser pago até o dia 29/09. Dá pra passar no cartão e dividir em 4x porém tem um acréscimo de 15% da taxa de cartão (taxa alta devido à necessidade do adiantamento das parcelas)";
  return (
    <div className="main_main-container">
      <NavBar
        txtbtn="Admin"
        btnFunc={() => {
          history.push("/autentication");
        }}
      />
      <form onSubmit={onSubmit}>
        <h1>INSCRIÇÕES</h1>
        <input
          className={errors.KidName && "is-invalid"}
          name="KidName"
          value={values.KidName}
          onChange={onChange}
          type="text"
          placeholder="Nome da criança"
        />
        <input
          className={errors.KidAge && "is-invalid"}
          name="KidAge"
          placeholder="Idade da criança"
          value={values.KidAge}
          onChange={onChange}
          type="number"
        />
        <input
          className={errors.KidParent && "is-invalid"}
          name="KidParent"
          value={values.KidParent}
          onChange={onChange}
          placeholder="Responsável"
          type="text"
        />
        <input
          className={errors.Phone && "is-invalid"}
          name="Phone"
          value={values.Phone}
          onChange={onChange}
          placeholder="Tel. Somente nímeros com DDD"
          type="text"
        />
        <input
          className={errors.KidChurch && "is-invalid"}
          name="KidChurch"
          value={values.KidChurch}
          onChange={onChange}
          placeholder="Igreja"
          type="text"
        />
        <input
          className={errors.KidCity && "is-invalid"}
          name="KidCity"
          value={values.KidCity}
          onChange={onChange}
          placeholder="Cidade"
          type="text"
        />
        <input
          className={errors.KidObs && "is-invalid"}
          name="KidObs"
          value={values.KidObs}
          onChange={onChange}
          placeholder="Restrições alimetares ou remédios"
          type="text"
        />
        <input
          className={errors.PaymentDay && "is-invalid"}
          name="PaymentDay"
          value={values.PaymentDay}
          onChange={onChange}
          placeholder="Data de pagamento"
          type="text"
        />
        <div className="alert-container">
          <p>{aviso}</p>
          <br></br>
          <p className="contato">Mais informações: (27) 99755-8607 - Bruna</p>

          <input
            Name="Check"
            type="checkbox"
            checked={ok}
            onChange={e => setOk(e.target.checked)}
          />

          <label for="Check">Concordo com as informaçoes acima.</label>
        </div>

        <button id={ok && "Btn-Enabled"} type="submit" disabled={!ok}>
          Enviar
        </button>
      </form>
      <NotificationContainer />
    </div>
  );
}
