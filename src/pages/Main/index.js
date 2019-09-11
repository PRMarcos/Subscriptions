import React from "react";
import { NavBar } from "../../components/NavBar";
import { Container, CardContainer } from "./style";
import { Card } from "../../components/Card";
import KidIcon from "../../assets/CardImages/Kids.png";
import VolunteerIcon from "../../assets/CardImages/volunteer.png";

export function Main({ history }) {
  return (
    <Container>
      <NavBar
        txtbtn="Admin"
        btnFunc={() => {
          history.push("/admin");
        }}
      />
      <CardContainer>
        <Card
          image={KidIcon}
          butunText="Quero ir!"
          description="Encontrista (Quem vai para receber)"
          buttonFuncition={() => {
            history.push("/encontrista");
          }}
        ></Card>
        <Card
          image={VolunteerIcon}
          butunText="Quero ir!"
          description="Encontreiro (Quem vai para trabalhar)"
          buttonFuncition={() => {
            history.push("/encontreiro");
          }}
        ></Card>
      </CardContainer>
    </Container>
  );
}
