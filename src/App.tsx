import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Section from "./components/Section";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import ProjectsList from "./components/ProjectsList";
import ContributionsList from "./components/ContributionsList";
import PublicationsList from "./components/PublicationsList";
import "./App.css";

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "experience", title: "Professional Experience" },
    { id: "projects", title: "Open-Source Projects" },
    { id: "contributions", title: "Open-Source Contributions" },
    { id: "publications", title: "Publications" },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
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
        <Section id="experience" title="Professional Experience">
          <ProfessionalExperience />
        </Section>

        <Section id="projects" title="Open-Source Projects">
          <ProjectsList />
        </Section>

        <Section id="contributions" title="Open-Source Contributions">
          <ContributionsList />
        </Section>

        <Section id="publications" title="Publications">
          <PublicationsList />
        </Section>
      </main>
    </div>
  );
};

export default App;
