import React, { useState } from "react";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { Login, CurrentUser } from "../../services/firestore";
import "./Login.css";
import { NavBar } from "../../components/NavBar";
export function LoginPage({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function OnSubmit(e) {
    e.preventDefault();

    Login(email, password)
      .then(() => {
        if (CurrentUser() != null) {
          setEmail("");
          setPassword("");
          history.push("/list");
        } else {
          setEmail("");
          setPassword("");
          NotificationManager.error(
            "Erro ao logar, verifique os dados",
            "Erro!"
          );
        }
      })

      .catch(e => {
        setEmail("");
        setPassword("");
        NotificationManager.error(e.message, "Erro!");
      });
  }

  return (
    <div className="login_main-container">
      <NavBar
        txtbtn="Home"
        btnFunc={() => {
          history.push("/");
        }}
      />
      <form onSubmit={OnSubmit}>
        <h1>Dados de acesso:</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <NotificationContainer />
    </div>
  );
}
