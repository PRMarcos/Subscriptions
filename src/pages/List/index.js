import React, { useState, useEffect } from "react";
import { Listar, LogOut } from "../../services/firestore";
import { NavBar } from "../../components/NavBar";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "./List.css";
import { Table } from "../../components/Table";
export function List({ history }) {
  const [values, setValues] = useState([]);

  useEffect(() => {
    let lista = [];
    async function dados() {
      lista = await Listar();
      setValues(lista);
    }
    dados().catch(e => {
      NotificationManager.error(e.message, "Erro!");
    });
  }, []);

  const headers = [
    "Nome",
    "Idade",
    "Responsável",
    "Telefone",
    "Cidade",
    "Igreja",
    "Observaçõs",
    "Data de pagamento"
  ];

  return (
    <div className="list_main-container">
      <NavBar
        txtbtn="LogOut"
        btnFunc={() => {
          LogOut().then(() => {
            history.push("/");
          });
        }}
      />
      <h1>INSCRITOS</h1>
      <Table Headers={headers} Values={values}></Table>
      <NotificationContainer />
    </div>
  );
}
