import React from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../../components/PageDefault";

function CadastroCategoria() {
  return (
    <PageDefault>
      <div style={{ margin: "100px" }}>
        <h1>Cadastro de Categoria</h1>
      </div>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
