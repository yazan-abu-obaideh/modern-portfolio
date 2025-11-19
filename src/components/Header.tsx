import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <h1 className="header__name">Yazan Abu Obaideh</h1>
      <p className="header__title">Mid-Level Software Engineer</p>
    </header>
  );
};

export default Header;
