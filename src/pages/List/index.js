import React, { useState, useEffect } from "react";
import { Listar, excluir } from "../../services/firestore";
import { NavBar } from "../../components/NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "../../components/Table";
import { Contatiner } from "./style";

export function List({ history, tableHeaders, enc }) {
  const [values, setValues] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    let lista = [];

    async function dados() {
      try {
        lista = await Listar(enc);
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
  }, [refresh, enc]);

  async function deleteRow(id) {
    if (window.confirm("Excluir mesmo?")) {
      await excluir(enc, id);
      setRefresh(true);
    }
  }

  return (
    <Contatiner>
      <NavBar
        txtbtn="Voltar"
        btnFunc={() => {
          history.push("/admin");
        }}
      />
      <h1>
        {enc === "Encontreiros" ? "Encontreiros" : "Encontristas"}:{" "}
        {values.length}
      </h1>
      <Table
        Headers={tableHeaders}
        Values={values}
        btnX
        deleteRow={deleteRow}
      ></Table>
      <ToastContainer />
    </Contatiner>
  );
}
