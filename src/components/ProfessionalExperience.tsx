import React from 'react';
import ExperienceSummary from './ExperienceSummary';
import './ProfessionalExperience.css';

const ProfessionalExperience: React.FC = () => {
  // TODO: Replace with your actual experience data
  const experiences = [
    {
      logo: '/progressoft-logo.png', // TODO: Add actual logo path
      logoAlt: 'ProgressSoft Logo',
      position: 'Full-Stack Software Engineer',
      company: 'ProgressSoft',
      duration: `June 2022 - March 2024 and April 2024 - Present`,
      details: [
        'Led development of core platform features serving 1M+ users',
        'Architected microservices infrastructure reducing latency by 40%',
        'Mentored team of 5 junior engineers',
      ],
    },
    {
      logo: '/logo-solid-sigasi-orange.svg', // TODO: Add actual logo path
      logoAlt: 'Sigasi Logo',
      position: 'Full-Stack Software Engineer',
      company: 'Sigasi',
      duration: 'April 2024 - March 2025',
      details: [
        'Led development of core platform features serving 1M+ users',
        'Architected microservices infrastructure reducing latency by 40%',
        'Mentored team of 5 junior engineers',
      ],
    },
  ];

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

export default ProfessionalExperience;
