import React from "react";
import {
  AwardImage,
  AwardProjectDetails,
  AwardProjectImageContainer,
  AwardProjectLive,
  AwardProjectName,
  AwardProject,
  LinkWrapper,
  LiveIcon,
  AwardProjectWrapper,
} from "../styles/Award.styled";

const AwardProjectComponent = ({
  img,
  projectName,
  liveLink,
  hasLink,
}) => {
  return (
    <AwardProjectWrapper hasLink={hasLink}>
      <AwardProject hasLink={hasLink}>
        <AwardProjectImageContainer
          href={liveLink}
          hasLink={hasLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AwardImage src={img} />
        </AwardProjectImageContainer>
        <AwardProjectDetails>
          <AwardProjectName>{projectName}</AwardProjectName>
          <LinkWrapper hasLink={hasLink}>
            <AwardProjectLive
              href={liveLink}
              hasLink={hasLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live <LiveIcon />
            </AwardProjectLive>
          </LinkWrapper>
        </AwardProjectDetails>
      </AwardProject>
    </AwardProjectWrapper>
  );
};

export default AwardProjectComponent;
