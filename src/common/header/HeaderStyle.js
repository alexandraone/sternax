import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const StyledHeader = styled.header`
  font-size: 1.25rem;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: black;
  height: 100px;
  width: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 1000;

  &.active {
    background: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

  & a:first-of-type {
    flex-grow: 1;
  }
`;

export const RightLinks = styled.div`
  font-size: 14px;
  & > * {
    margin: 0 1.5rem;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

export const MenuButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
