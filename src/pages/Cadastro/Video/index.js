import React from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../../components/PageDefault";

function CadastroVideo() {
  return (
    <PageDefault>
      <div style={{ marginTop: "100px" }}>
        <h1>Cadastro de Vídeo</h1>
      </div>

      <Link to="/cadastro/categoria">Cadastrat Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
