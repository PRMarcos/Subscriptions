import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../services/auth";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Login } from "../../services/firestore";
import "./Login.css";
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
        await Login(email.value, password.value);
        history.push("/list");
      } catch (error) {
        NotificationManager.error(error.message, "Erro!");
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/list" />;
  }

  return (
    <div className="login_main-container">
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
      <NotificationContainer />
    </div>
  );
};

export default withRouter(LoginPage);
