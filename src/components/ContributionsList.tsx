import React, { useState } from "react";
import { Contribution, contributions } from "../data";
import "./ContributionsList.css";

const ContributionsList: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedContributions = showAll
    ? contributions
    : contributions.slice(0, 5);

  return (
    <div className="contributions-list">
      {displayedContributions.map((contribution, index) => (
        <ContributionItem key={index} contribution={contribution} />
      ))}

      {contributions.length > 5 && (
        <button
          className="contributions-list__see-more"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show Less"
            : `See More (${contributions.length - 5} more)`}
        </button>
      )}
    </div>
  );
};

interface ContributionItemProps {
  contribution: Contribution;
}

const ContributionItem: React.FC<ContributionItemProps> = ({
  contribution,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="contribution">
      <div className="contribution__header">
        <img
          src={contribution.logo}
          alt={contribution.logoAlt}
          className="contribution__logo"
        />
        <div className="contribution__main">
          <a
            href={contribution.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contribution__repo-name"
          >
            {contribution.repoName}
          </a>
          <p className="contribution__count">
            {contribution.mergeRequests.length}{" "}
            {contribution.mergeRequests.length === 1
              ? "contribution"
              : "contributions"}
          </p>
        </div>
        <button
          className="contribution__toggle"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={
            isExpanded ? "Hide merge requests" : "Show merge requests"
          }
        >
          <span className="contribution__toggle-text">
            Merge Requests
          </span>
          <span
            className={`contribution__toggle-icon ${
              isExpanded ? "contribution__toggle-icon--expanded" : ""
            }`}
          >
            ▼
          </span>
        </button>
      </div>

      {isExpanded && (
        <ul className="contribution__merge-requests">
          {contribution.mergeRequests.map((mr, index) => (
            <li key={index} className="merge-request">
              <div className="merge-request__header">
                <a
                  href={mr.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="merge-request__title"
                >
                  {mr.title}
                </a>
                <span
                  className={`merge-request__status merge-request__status--${mr.status}`}
                >
                  {mr.status}
                </span>
              </div>
              <p className="merge-request__description">{mr.description}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ContributionsList;
