import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
import Logo from "../../assets/Logo.png";

import Button from "../../components/Button";

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="logo"></img>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
};

export default Menu;
