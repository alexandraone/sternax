import styled from 'styled-components';
import { devices } from '../../helpers/devices';

export const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 6rem;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  justify-content: center;

  div {
    width: 350px;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
    div {
      padding-right: 0;
    }
  }
`;

export const Link = styled.a`
  color: #0dad8d;
  text-decoration: none;
  font-weight: 600;
`;

export const PersonInfo = styled.div`
  padding: 2rem 0;
  text-align: center;
`;
