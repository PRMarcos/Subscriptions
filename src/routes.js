import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Main } from "./pages/Main";
import { List } from "./pages/List";
import { LoginPage } from "./pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/list" exact component={List} />
      <Route path="/autentication" exact component={LoginPage} />
    </BrowserRouter>
  );
}
