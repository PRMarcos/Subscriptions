import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Main } from "./pages/Main";
import { List } from "./pages/List";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./services/auth";
import { PrivateRoute } from "./PrivateRoute";
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
  "Data de pagamento"
];

const encontreiroHeaders = [
  "Nome",
  "Igreja",
  "Idade",
  "Cidade",
  "Telefone",
  "Data de pagamento"
];
export default function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <PrivateRoute path="/list" exact component={List} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/autentication" exact component={LoginPage} />
          <Route path="/encontreiro" exact component={EncontreirosFrom} />
          <Route path="/encontristas" exact component={EncontristasForm} />
          <Route
            path="/list/encontristas"
            exact
            render={props => (
              <List
                {...props}
                tableHeaders={encontristaHeaders}
                enc={"Inscricoes"}
              />
            )}
          />

          <Route
            path="/list/encontreiros"
            exact
            render={props => (
              <List
                {...props}
                tableHeaders={encontreiroHeaders}
                enc={"Encontreiros"}
              />
            )}
          />
          <Route path="*" component={() => <Redirect to={"/"}></Redirect>} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
