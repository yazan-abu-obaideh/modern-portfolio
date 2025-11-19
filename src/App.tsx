import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import "./App.css";

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "experience", title: "Professional Experience" },
    { id: "projects", title: "Open-Source Projects" },
    { id: "publications", title: "Publications" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app">
      <Navigation
        sections={sections}
        onNavigate={scrollToSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Header />

      <main className="main-content">
        {sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title}>
            {/* TODO: Add content for {section.title} */}
            Yazan
          </Section>
        ))}
      </main>
    </div>
  );
};

export default App;
