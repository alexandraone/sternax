import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const StyledSideMenu = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 40%;
  z-index: 1210;

  transition: transform 0.3s ease-out;
  ${({ show }) =>
    show ? 'transform: translateX(0)' : 'transform: translateX(100%)'};

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-top: 100px;
  }

  a {
    color: #fff;
    margin: 30px 0 0 30px;
    cursor: pointer;
  }
`;
