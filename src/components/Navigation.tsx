import React from "react";
import "./Navigation.css";

interface NavigationSection {
  id: string;
  title: string;
}

interface NavigationProps {
  sections: NavigationSection[];
  onNavigate: (sectionId: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  sections,
  onNavigate,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <button
        className="navigation__hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className="navigation__hamburger-line"></span>
        <span className="navigation__hamburger-line"></span>
        <span className="navigation__hamburger-line"></span>
      </button>

      <ul
        className={`navigation__list ${
          isMobileMenuOpen ? "navigation__list--open" : ""
        }`}
      >
        {sections.map((section) => (
          <li key={section.id} className="navigation__item">
            <button
              className="navigation__link"
              onClick={() => onNavigate(section.id)}
              aria-label={`Navigate to ${section.title}`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
