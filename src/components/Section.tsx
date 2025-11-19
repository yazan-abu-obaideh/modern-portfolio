import React, { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`} className="section__title">
        {title}
      </h2>
      <div className="section__content">{children}</div>
    </section>
  );
};

export default Section;
