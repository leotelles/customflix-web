import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import CadastroVideo from "./pages/Cadastro/Video";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={() => <h1>Página não Encontrada!</h1>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
