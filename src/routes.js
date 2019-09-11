import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Main } from "./pages/Main";
import { List } from "./pages/List";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./services/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PrivateListRoute } from "./PrivateListRoute";
import { EncontreirosFrom } from "./pages/EncontreirosFrom";
import { EncontristasForm } from "./pages/EncontristasForm";
import { Admin } from "./pages/Admin";

const encontristaHeaders = [
  "Nome",
  "Igreja",
  "Idade",
  "Cidade",
  "Responsável",
  "Telefone",
  "Observaçõs",
  "Data de pagamento",
  "Excluir"
];

const encontreiroHeaders = [
  "Nome",
  "Igreja",
  "Idade",
  "Cidade",
  "Telefone",
  "Data de pagamento",
  "Excluir"
];
export default function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <PrivateRoute path="/admin" exact component={Admin} />
          <Route path="/autentication" exact component={LoginPage} />
          <Route path="/encontreiro" exact component={EncontreirosFrom} />
          <Route path="/encontristas" exact component={EncontristasForm} />

          <PrivateListRoute
            path="/list/encontristas"
            exact
            component={List}
            tableHeaders={encontristaHeaders}
            enc={"Inscricoes"}
          />

          <PrivateListRoute
            path="/list/encontreiros"
            exact
            component={List}
            tableHeaders={encontreiroHeaders}
            enc={"Encontreiros"}
          />

          <Route path="*" component={() => <Redirect to={"/"}></Redirect>} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
