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
          <Route path="/encontrista" exact component={EncontristasForm} />
          <Route path="*" component={() => <Redirect to={"/"}></Redirect>} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
