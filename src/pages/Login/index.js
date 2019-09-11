import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from "../../services/firestore";
import { Container } from "./style";
import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { password, email } = event.target.elements;
      try {
        if (email.value === "" || password.value === "") {
          throw new Error("Email e senha precisam ser preenchidos");
        }
        await Login(email.value, password.value);
        history.push("/admin");
      } catch (error) {
        toast.error(error.message);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/admin" />;
  }

  return (
    <Container>
      <NavBar
        txtbtn="Home"
        btnFunc={() => {
          history.push("/");
        }}
      />
      <form onSubmit={handleLogin}>
        <h1>Dados de acesso:</h1>

        <Input
          Name="email"
          Value={email}
          OnChange={e => setEmail(e.target.value)}
          Type="email"
          Placeholder="Email"
        />
        <Input
          Name="password"
          Value={password}
          OnChange={e => setPassword(e.target.value)}
          Type="password"
          Placeholder="Senha"
        />

        <Button>Entrar</Button>
      </form>
      <ToastContainer />
    </Container>
  );
};

export default withRouter(LoginPage);
