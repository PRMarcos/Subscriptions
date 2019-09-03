import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Main } from "./pages/Main";
import { List } from "./pages/List";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./services/auth";
import { PrivateRoute } from "./PrivateRoute";

export default function Routes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <PrivateRoute path="/list" exact component={List} />
          <Route path="/autentication" exact component={LoginPage} />
          <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
