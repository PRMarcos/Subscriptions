import React, { useState, useEffect } from "react";
import { Listar, LogOut } from "../../services/firestore";
import { NavBar } from "../../components/NavBar";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "./List.css";

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
      <div className="table-container">
        <table className="Table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Responsável</th>
              <th>Telefone</th>
              <th>Cidade</th>
              <th>Igreja</th>
              <th>Observaçõs</th>
              <th>Data de pagamento</th>
            </tr>
          </thead>
          <tbody>
            {values.map(obj => (
              <tr key={obj._id}>
                <td>{obj.KidName}</td>
                <td>{obj.KidAge}</td>
                <td>{obj.KidParent}</td>
                <td>{obj.Phone}</td>
                <td>{obj.KidCity}</td>
                <td>{obj.KidChurch}</td>
                <td>{obj.KidObs}</td>
                <td>{obj.PaymentDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NotificationContainer />
    </div>
  );
}
