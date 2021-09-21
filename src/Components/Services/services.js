import React from "react";
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./services.Elements";

const services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Wellcome</ServicesH2>
          <ServicesP>Lorem Ipsum,Lorem ipsum dolor sit amet</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Who are you</ServicesH2>
          <ServicesP>Lorem Ipsum,Lorem ipsum dolor sit amet</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>My Office</ServicesH2>
          <ServicesP>Lorem Ipsum,Lorem ipsum dolor sit amet</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default services;
