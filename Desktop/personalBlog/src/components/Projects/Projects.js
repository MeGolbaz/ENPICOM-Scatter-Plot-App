import React from "react";
import { StyledParagraph } from "../styles/Typography.styled";
import { ProjectsContainer, StyledProjects } from "../styles/Projects.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { projectData } from "./projectsData";
import ProjectCardComponent from "./ProjectCard";

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <SectionHeading>
        <SectionTitle>Projects.</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Some of the projects I've created for work, university, and practice.
      </StyledParagraph>
      <ProjectsContainer>
        {projectData.map((project) => {
          return <ProjectCardComponent key={project.id} {...project} />;
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
