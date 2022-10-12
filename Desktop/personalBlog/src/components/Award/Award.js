import React from "react";
import {
  AwardProjectContainer,
  StyledAward,
} from "../styles/Award.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import AwardProjectComponent from "./AwardProject";
import { projectsData } from "./data";

const Award = () => {
  return (
    <StyledAward id="Award">
      <SectionHeading>
        <SectionTitle>More.</SectionTitle>
      </SectionHeading>
      <StyledParagraph dark="true" textAlign="center">
        Awards/Honors
      </StyledParagraph>
      <AwardProjectContainer>
        {projectsData.map((project) => {
          return <AwardProjectComponent key={project.id} {...project} />;
        })}
      </AwardProjectContainer>
    </StyledAward>
  );
};

export default Award;
