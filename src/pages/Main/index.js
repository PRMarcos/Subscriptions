import React from "react";
import { NavBar } from "../../components/NavBar";
import { Button } from "../../components/Button";
import { Container, Card } from "./style";

export function Main({ history }) {
  return (
    <Container>
      <NavBar
        txtbtn="Admin"
        btnFunc={() => {
          history.push("/autentication");
        }}
      />
    </Container>
  );
}
