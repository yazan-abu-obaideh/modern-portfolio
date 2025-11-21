import React from 'react';
import ExperienceSummary from './ExperienceSummary';
import { experiences } from '../data';
import './ProfessionalExperience.css';

export const ProfessionalExperience: React.FC = () => {
  return (
    <div className="professional-experience">
      {experiences.map((experience, index) => (
        <ExperienceSummary
          key={index}
          logo={experience.logo}
          logoAlt={experience.logoAlt}
          position={experience.position}
          company={experience.company}
          duration={experience.duration}
          details={experience.details}
        />
      ))}
    </div>
  );
};