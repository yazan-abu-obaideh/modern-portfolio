import React, { useState } from "react";
import { publications } from "../data";
import "./PublicationsList.css";

interface Publication {
  title: string;
  journal: string;
  journalUrl: string;
  authors: string;
  abstract: string;
  logo: string;
  logoAlt: string;
  affiliation: string;
}

const PublicationsList: React.FC = () => {
  return (
    <div className="publications-list">
      {publications.map((publication, index) => (
        <PublicationItem key={index} publication={publication} />
      ))}
    </div>
  );
};

interface PublicationItemProps {
  publication: Publication;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="publication">
      <div className="publication__header">
        <img
          src={publication.logo}
          alt={publication.logoAlt}
          className="publication__logo"
        />
        <div className="publication__main">
          <h3 className="publication__title">{publication.title}</h3>
          <p className="publication__affiliation">{publication.affiliation}</p>
          <p className="publication__metadata">
            <a
              href={publication.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="publication__journal"
            >
              {publication.journal}
            </a>
            {" • "}
            <span className="publication__authors">{publication.authors}</span>
          </p>

          <button
            className="publication__toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Hide abstract" : "Show abstract"}
          >
            <span className="publication__toggle-text">
              Abstract
            </span>
            <span
              className={`publication__toggle-icon ${
                isExpanded ? "publication__toggle-icon--expanded" : ""
              }`}
            >
              ▼
            </span>
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="publication__abstract">
          <h4 className="publication__abstract-heading">Abstract</h4>
          <p className="publication__abstract-text">{publication.abstract}</p>
        </div>
      )}
    </article>
  );
};

export default PublicationsList;
