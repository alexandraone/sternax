import React from 'react';
import {
  Copyright,
  FooterContent,
  OrgNumber,
  StyledFooter,
} from './FooterStyle';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Copyright>Copyright &copy; Sternax Data AB 2021</Copyright>
        <OrgNumber>Org.nr. 556920-0339</OrgNumber>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
