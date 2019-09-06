import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../../services/hooks";
import { NavBar } from "../../components/NavBar";
import { Adicionar } from "../../services/firestore";
import { Container, AlertContainer } from "./style";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

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
    try {
      await Adicionar({
        KidName: values.KidName,
        KidChurch: values.KidChurch,
        KidAge: values.KidAge,
        KidCity: values.KidCity,
        KidParent: values.KidParent,
        Phone: values.Phone,
        KidObs: values.KidObs,
        PaymentDay: values.PaymentDay
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function notyfyError(err) {
    let msgError = "";
    if (Object.keys(err).length === 0) {
      toast.success("Inscrição enviada");
    } else {
      if (Object.keys(err).length > 1) {
        msgError = "Existem dados obrigatórios não preenchidos";
      } else {
        Object.keys(err).forEach(erro => {
          msgError = msgError + err[erro.valueOf()] + " \n";
        });
      }
      toast.error(msgError, "Erro!");
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
    <Container>
      <NavBar
        txtbtn="Admin"
        btnFunc={() => {
          history.push("/autentication");
        }}
      />
      <form onSubmit={onSubmit}>
        <h1>INSCRIÇÕES</h1>

        <Input
          IsInvalid={errors.KidName}
          Name="KidName"
          Value={values.KidName}
          OnChange={onChange}
          Type="text"
          Placeholder="Nome da criança"
        />

        <Input
          IsInvalid={errors.KidAge}
          Name="KidAge"
          Value={values.KidAge}
          OnChange={onChange}
          Type="number"
          Placeholder="Idade da criança"
        />

        <Input
          IsInvalid={errors.KidParent}
          Name="KidParent"
          Value={values.KidParent}
          OnChange={onChange}
          Type="text"
          Placeholder="Responsável"
        />

        <Input
          IsInvalid={errors.Phone}
          Name="Phone"
          Value={values.Phone}
          OnChange={onChange}
          Type="text"
          Placeholder="Tel. Somente números com DDD"
        />

        <Input
          IsInvalid={errors.KidChurch}
          Name="KidChurch"
          Value={values.KidChurch}
          OnChange={onChange}
          Type="text"
          Placeholder="Igreja"
        />

        <Input
          IsInvalid={errors.KidCity}
          Name="KidCity"
          Value={values.KidCity}
          OnChange={onChange}
          Type="text"
          Placeholder="Cidade"
        />

        <Input
          IsInvalid={errors.KidObs}
          Name="KidObs"
          Value={values.KidObs}
          OnChange={onChange}
          Type="text"
          Placeholder="Restrições alimetares ou remédios"
        />

        <Input
          IsInvalid={errors.PaymentDay}
          Name="PaymentDay"
          Value={values.PaymentDay}
          OnChange={onChange}
          Type="text"
          Placeholder="Data de pagamento"
        />

        <AlertContainer>
          <p>{aviso}</p>
          <br></br>
          <p>
            <b>Mais informações: (27) 99755-8607 - Bruna</b>
          </p>
          <br></br>
          <input
            name="Check"
            type="checkbox"
            checked={ok}
            onChange={e => setOk(e.target.checked)}
          />

          <label>Concordo com as informaçoes acima.</label>
        </AlertContainer>
        <Button Disabled={!ok}> Enviar </Button>
      </form>
      <ToastContainer />
    </Container>
  );
}
