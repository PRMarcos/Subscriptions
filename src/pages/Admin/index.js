import React from "react";
import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { LogOut } from "../../services/firestore";

import { Container, OptionContainer } from "./style";

export function Admin({ history }) {
  return (
    <Container>
      <NavBar
        txtbtn="logout"
        btnFunc={async () => {
          await LogOut();
          history.push("/");
        }}
      />
      <OptionContainer>
        <h1>Administração:</h1>
        <Button
          small
          btnFunc={() => {
            history.push("/list/encontristas");
          }}
        >
          Listar Encontristas
        </Button>
        <Button
          small
          btnFunc={() => {
            history.push("/list/encontreiros");
          }}
        >
          Listar Encontreiros
        </Button>
        <Button
          small
          btnFunc={() => {
            alert("funçao ainda nao implementada.");
          }}
        >
          Exportar
        </Button>
      </OptionContainer>
    </Container>
  );
}
