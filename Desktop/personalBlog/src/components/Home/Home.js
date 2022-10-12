import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Greeting,
  Social,
  Socials,
} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  let today = new Date(),
    hour = today.getHours();

  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Mehdi Golbaz</Name>
        <Title>User Interface Developer</Title>
        <p>
          I <span className="change-text"></span>{" "}
          <span className="responsive">i</span>
          <span className="responsive">n</span>
          <span className="responsive">t</span>
          <span className="responsive">e</span>
          <span className="responsive">r</span>
          <span className="responsive">a</span>
          <span className="responsive">c</span>
          <span className="responsive">t</span>
          <span className="responsive">i</span>
          <span className="responsive">v</span>
          <span className="responsive">e</span> applications.
        </p>
        <StyledButtonsContainer>
           <StyledButton
            icon={aboutIcon}
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>About</span>
          </StyledButton>
          <StyledButton
            icon={projectIcon}
            to="projects"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Projects</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          it's a great 
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>
          , isn't it?!
        </Greeting>
        <Socials>
          <Social
            href="mailto:meddi.golbaz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/megolbaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="https://www.linkedin.com/in/mehdigolbaz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
