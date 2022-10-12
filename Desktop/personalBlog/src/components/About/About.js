import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.png";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true">
          About.
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Mehdi Golbaz. I am currently studying for the second year of the
            master's in Human-Computer Interaction at Salzburg university/ FH Salzburg.
            I am a creative and self-starting Front End Developer with 1+ year
            of experience building customer-focused websites.Proficient with CSS
            Frameworks and JS Libraries, with extensive knowledge of UX and user
            psychology.Solution-driven and adept at working in collaborative environments. 
          </StyledParagraph>
          <StyledParagraph>
            Recently, I have been collaborating with CERN Alumni to
            assist them in redefining the UX/UI of their new platform. I am honored that
            I recently worked as an intern with a CERN Openlab Summer studentship. I
            collaborated with the CERN IT team to redefine and design the new user
            interfaces of the CERN Search Portal to deliver a heightened user experience
            and, additionally, significantly mobile-friendliness of CERN Search Portals.
            In addition, I developed those mocks in the final by getting the practice of react.js,
            the front end, and certain backend sections for those web application portals.
          </StyledParagraph>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
