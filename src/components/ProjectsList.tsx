import React, { useState } from "react";
import { projects } from "../data";
import "./ProjectsList.css";

interface Project {
  title: string;
  githubUrl: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ProjectsList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentProjects = () => {
    return projects.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="projects-carousel">
      <div className="projects-carousel__container">
        <button
          className="projects-carousel__nav projects-carousel__nav--prev"
          onClick={prevSlide}
          aria-label="Previous projects"
        >
          {"<"}
        </button>

        <div className="projects-carousel__cards">
          {getCurrentProjects().map((project, index) => (
            <ProjectCard key={startIndex + index} project={project} />
          ))}
        </div>

        <button
          className="projects-carousel__nav projects-carousel__nav--next"
          onClick={nextSlide}
          aria-label="Next projects"
        >
          {">"}
        </button>
      </div>

      <div className="projects-carousel__dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`projects-carousel__dot ${
              index === currentIndex ? "projects-carousel__dot--active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-card__image-container">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="project-card__image"
        />
      </div>
      <div className="project-card__content">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__title"
        >
          {project.title}
        </a>
        <p className="project-card__description">{project.description}</p>
      </div>
    </article>
  );
};

export default ProjectsList;
