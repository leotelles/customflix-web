import React from "react";

import "./Menu.css";
import Logo from "../../assets/Logo.png";

import Button from "../../components/Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="logo"></img>
      </a>

      <Button as="a" className="ButtonLink" href="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
