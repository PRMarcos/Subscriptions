import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Main } from "./pages/Main";
import { List } from "./pages/List";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./services/auth";
import { PrivateRoute } from "./PrivateRoute";
import { EncontreirosFrom } from "./pages/EncontreirosFrom";

export default function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <PrivateRoute path="/list" exact component={List} />
          <Route path="/autentication" exact component={LoginPage} />
          <Route path="/encontreiro" exact component={EncontreirosFrom} />
          <Route
            path="/encontrista"
            exact
            component={() => <h1>Em construçao! ☺ </h1>}
          />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
