import React, { useState } from 'react';
import './ExperienceSummary.css';

interface ExperienceSummaryProps {
  logo: string;
  logoAlt: string;
  position: string;
  company: string;
  duration: string;
  details: string[];
}

const ExperienceSummary: React.FC<ExperienceSummaryProps> = ({
  logo,
  logoAlt,
  position,
  company,
  duration,
  details,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="experience-summary">
      <div className="experience-summary__header">
        <img 
          src={logo} 
          alt={logoAlt} 
          className="experience-summary__logo"
        />
        <div className="experience-summary__title-group">
          <h3 className="experience-summary__position">{position}</h3>
          <p className="experience-summary__company">{company}</p>
          <p className="experience-summary__duration">{duration}</p>
        </div>
        <button
          className="experience-summary__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          <span className={`experience-summary__toggle-icon ${isExpanded ? 'experience-summary__toggle-icon--expanded' : ''}`}>
            ▼
          </span>
        </button>
      </div>
      
      {isExpanded && (
        <ul className="experience-summary__details">
          {details.map((detail, index) => (
            <li key={index} className="experience-summary__detail">
              {detail}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ExperienceSummary;
