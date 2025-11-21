import React from "react";
import "./PublicationsList.css";
import { publications } from "../data";

interface Publication {
  title: string;
  journal: string;
  journalUrl: string;
  authors: string;
}

export const PublicationsList: React.FC = () => {
  // TODO: Replace with your actual publication data

  return (
    <div className="publications-list">
      {publications.map((publication, index) => (
        <article key={index} className="publication">
          <h3 className="publication__title">{publication.title}</h3>
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
        </article>
      ))}
    </div>
  );
};

export default PublicationsList;
