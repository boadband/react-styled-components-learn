import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../Button.Elements";
import {
  SectionContainer,
  SectionBg,
  VideoBg,
  SectionContent,
  SectionH1,
  SectionP,
  SectionBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./Section.Elements";

const Section = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionContainer id='home'>
      <SectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </SectionBg>
      <SectionContent>
        <SectionH1> Lorem ipsum dolor sit amet</SectionH1>
        <SectionP>
          Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet
        </SectionP>
        <SectionBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </SectionBtnWrapper>
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
