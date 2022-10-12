import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "/Users/mehdigolbaz/Desktop/personalBlog/src/assets/mydrawing.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
            My curiosity and true passion are<br/> in performing on health-related topics in HCI<br/>
            and how we, as future HCI experts,<br/> might positively impact began at this time.<br/>
            This expert's objective is to increase cognition,<br/> analyze current technological flaws,<br/>
            and prioritize user well-being<br/> as the most influential aspect.
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
