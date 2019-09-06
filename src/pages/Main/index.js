import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar } from "../../components/NavBar";
import { Container } from "./style";

export function Main({ history }) {
  return (
    <Container>
      <NavBar
        txtbtn="Admin"
        btnFunc={() => {
          history.push("/autentication");
        }}
      />
      <h1>Em construçao ☻</h1>
      <ToastContainer />
    </Container>
  );
}
