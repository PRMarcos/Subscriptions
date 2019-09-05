import React, { useState, useEffect } from "react";
import { Listar, LogOut } from "../../services/firestore";
import { NavBar } from "../../components/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "../../components/Table";
import { Contatiner } from "./style";

export function List({ history }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    let lista = [];

    async function dados() {
      try {
        lista = await Listar();
        setValues(lista);
      } catch (error) {
        if (error.message === "permission-denied") {
          toast.error("É preciso estar logado!");
        } else {
          toast.error(error.message);
        }
      }
    }
    dados();
  }, []);

  const headers = [
    "Nome",
    "Igreja",
    "Idade",
    "Cidade",
    "Responsável",
    "Telefone",
    "Observaçõs",
    "Data de pagamento"
  ];

  return (
    <Contatiner>
      <NavBar
        txtbtn="LogOut"
        btnFunc={() => {
          LogOut().then(() => {});
        }}
      />
      <h1>INSCRITOS</h1>
      <Table Headers={headers} Values={values}></Table>
      <ToastContainer />
    </Contatiner>
  );
}
