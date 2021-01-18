import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.mobileL} {
    height: 80vh;
  }
`;

export const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  overflow: hidden;

  @media ${devices.mobileL} {
    height: 80vh;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3.5px;
  font-weight: 400;
  text-align: center;

  @media ${devices.mobileL} {
    font-size: 3.5rem;
  }

  @media ${devices.mobileS} {
    font-size: 3rem;
  }
`;

export const Button = styled(Link)`
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 1rem;
  letter-spacing: 2px;
  color: white;

  @media ${devices.mobileM} {
    padding: 1rem 0;
    letter-spacing: 2.5px;
    width: 100%;
    text-align: center;
  }
`;

export const Brand = styled.div`
  margin-top: 1rem;
  font-weight: 600;
`;
