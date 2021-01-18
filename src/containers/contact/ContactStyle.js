import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 6rem;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
    margin: 1rem;
    width: 20rem;
  }
`;

export const Paragraph = styled.p`
  text-transform: uppercase;
  padding-bottom: 3rem;
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 1rem;
  display: inline-block;
`;
