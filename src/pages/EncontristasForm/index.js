import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../../services/hooks";
import { NavBar } from "../../components/NavBar";
import { Adicionar } from "../../services/firestore";
import { Container, AlertContainer } from "./style";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ValidateKid } from "../../Models/Kid";

export function EncontristasForm({ history }) {
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
      setOk(false);
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
    ValidateKid,
    notyfyError
  );

  const aviso =
    "Sobre o pagamento: Para garantir a vaga " +
    "e necessário uma entrada de R$40,00. " +
    "O restante pode ser pago até o dia 29/09/2019. " +
    "É possível parcelar em 4x no cartão de crédito " +
    "porém tem um acréscimo de 15% da taxa de cartão " +
    "(taxa alta devido à necessidade do adiantamento das parcelas)";

  return (
    <Container>
      <NavBar
        txtbtn="Home"
        btnFunc={() => {
          history.push("/");
        }}
      />
      <form onSubmit={onSubmit}>
        <h1>ENCONTRISTA</h1>

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
