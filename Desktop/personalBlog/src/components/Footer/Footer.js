import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Salzburg, Austria</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:meddi.golbaz@gmail.com"
          data-hover="Let's talk!"
        >
          Say hi.
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        {/* <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:"></ContactLink>
        </FooterContact> */}
        <FooterContact>
          <ContactHeader>Links</ContactHeader>{" "}
          <FooterSocials>
             <ContactLink
              href="https://www.linkedin.com/in/mehdigolbaz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://github.com/megolbaz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Email Address </ContactHeader>
          <ContactLink href="gmail:meddi.golbaz@gmail.com">
            meddi.golbaz@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/megolbaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mehdi Golbaz
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
