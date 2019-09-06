import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../../services/hooks";
import { NavBar } from "../../components/NavBar";
import { AdicionarEncontreiro } from "../../services/firestore";
import { Container, AlertContainer } from "./style";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function EncontreirosFrom({ history }) {
  const [ok, setOk] = useState(false);

  const initialState = {
    Name: "",
    Church: "",
    Age: "",
    City: "",
    Phone: "",
    PaymentDay: ""
  };

  const validateForm = values => {
    let errors = {};

    if (values.Name.trim() === "") {
      errors.Name = "Nome precisa ser preenchido";
    }

    if (values.Church.trim() === "") {
      errors.Church = "Igreja precisa ser preenchida";
    }

    if (values.Age.trim() === "") {
      errors.Age = "Idade precisa ser preenchida";
    }

    if (values.City.trim() === "") {
      errors.City = "Cidade precisa ser preenchida";
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
      await AdicionarEncontreiro({
        Name: values.KidName,
        Church: values.KidChurch,
        Age: values.KidAge,
        City: values.KidCity,
        Phone: values.Phone,
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
    validateForm,
    notyfyError
  );

  const aviso =
    "Sobre o pagamento: Para garantir a vaga" +
    "e preciso uma entrada de 40 reais" +
    "e o restante pode ser pago até o dia 29/09. " +
    "Dá pra passar no cartão e dividir " +
    "em 4x porém tem um acréscimo de 15% da taxa de cartão " +
    "(taxa alta devido à necessidade do adiantamento das parcelas)";

  return (
    <Container>
      <NavBar
        txtbtn="Admin"
        btnFunc={() => {
          history.push("/autentication");
        }}
      />
      <form onSubmit={onSubmit}>
        <h1>ENCONTREIRO:</h1>

        <Input
          IsInvalid={errors.Name}
          Name="Name"
          Value={values.Name}
          OnChange={onChange}
          Type="text"
          Placeholder="Nome completo"
        />

        <Input
          IsInvalid={errors.Age}
          Name="Age"
          Value={values.Age}
          OnChange={onChange}
          Type="number"
          Placeholder="Idade"
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
          IsInvalid={errors.Church}
          Name="Church"
          Value={values.Church}
          OnChange={onChange}
          Type="text"
          Placeholder="Igreja"
        />

        <Input
          IsInvalid={errors.City}
          Name="City"
          Value={values.City}
          OnChange={onChange}
          Type="text"
          Placeholder="Cidade"
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
