import React from "react";
import { personalInfo } from "../data";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <div className="header__left">
          <img
            src={personalInfo.profileImage}
            alt={`${personalInfo.name} profile`}
            className="header__image"
          />
          <div className="header__content">
            <h1 className="header__name">{personalInfo.name}</h1>
            <p className="header__title">{personalInfo.jobTitle}</p>
          </div>
        </div>
        <div className="header__summary">
          <p className="header__summary-text">{personalInfo.summary}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
