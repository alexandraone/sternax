import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const Wrapper = styled.div`
  text-align: center;
  padding: 6rem 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
    margin: 1rem;
    width: 20rem;

    @media ${devices.laptop} {
      width: 18rem;
    }

    @media ${devices.desktop} {
      width: 30rem;
    }
  }
`;

export const ServicesContainer = styled.div`
  margin-bottom: 5rem;
`;

export const Description = styled.p``;
