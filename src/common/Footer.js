import React from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';

const StyledFooter = styled.footer`
  width: 100%;
  background: #222222;
`;

const FooterContent = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  @media ${devices.tablet} {
    padding: 2rem 0.5rem;
  }

  @media ${devices.mobileL} {
    flex-direction: column;
  }
`;

const Text = styled.p`
  color: #fff;
  @media ${devices.mobileL} {
    padding-bottom: 1rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <Text>Copyright &copy; Sternax Data AB 2021, Org.nr. 556920-0339</Text>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
