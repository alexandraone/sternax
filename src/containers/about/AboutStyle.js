import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 6rem;

  @media ${devices.mobileL} {
    padding-bottom: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  text-align: left;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 25rem;
  object-fit: cover;

  @media ${devices.tablet} {
    width: 100%;
  }

  @media ${devices.desktop} {
    height: 40rem;
    margin-bottom: 6rem;
  }
`;

export const Description = styled.div`
  margin: 0 4rem;

  @media ${devices.mobileL} {
    margin: 1rem;
  }

  @media ${devices.desktop} {
    max-width: 70%;
  }
`;
