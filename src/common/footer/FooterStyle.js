import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const StyledFooter = styled.footer`
  width: 100%;
  background: #222222;
`;

export const FooterContent = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  @media ${devices.tablet} {
    padding: 2rem 0.5rem;
    flex-direction: column;
  }
`;

export const Copyright = styled.p``;

export const OrgNumber = styled.p`
  @media ${devices.mobileL} {
    padding-bottom: 0.25rem;
  }
`;
