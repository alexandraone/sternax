import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const StyledFooter = styled.footer`
  width: 100%;
  background: #222222;
`;

export const FooterContent = styled.div`
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

export const Text = styled.p`
  color: #fff;
  @media ${devices.mobileL} {
    padding-bottom: 1rem;
  }
`;
