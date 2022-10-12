import React from "react";
import './projects.css';
import { GoArrowUp } from "react-icons/go";
import { IconContext } from "react-icons";
import {
  LinkName,
  ProjectCard,
  ProjectpublisherLink,
  ProjectDetails,
  ProjectTitle,
} from "../styles/Projects.styled";
const ProjectCardComponent = ({
  id,
  title,
  publisherLink,
  liveLink,
}) => {
  return (
        <>
      <IconContext.Provider value={{ size: "1rem" }}>
        <ProjectCard>
            <iframe
            className="transitionFile"
            loading="auto"
            display="initial"
            allow="fullscreen"
            id={id}
       
            src={liveLink}>
            </iframe>
          <ProjectDetails>
            <ProjectTitle>
              {title}
            </ProjectTitle>
            <ProjectpublisherLink
              href={publisherLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoArrowUp />
              <LinkName>Publisher</LinkName>
            </ProjectpublisherLink>
          </ProjectDetails>
        </ProjectCard>
      </IconContext.Provider>
    </>
  );
};

export default ProjectCardComponent;
