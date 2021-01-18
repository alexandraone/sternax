import React from 'react';
import styled from 'styled-components';
import HrLine from '../ui/HrLine';

const Wrapper = styled.div`
  padding-bottom: 6rem;
  text-align: center;
`;

const Heading = styled.h1`
  text-align: center;
  padding-top: 6rem;
`;

const Container = styled.div`
  text-align: center;
`;

const UlList = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 600;
`;

const Clients = () => {
  return (
    <>
      <Wrapper id='clients'>
        <Heading>Kunder</Heading>
        <HrLine />
        <Container>
          <p>
            Vi har haft förmånen att jobba hos många olika kunder under åren. De
            senaste samt de som vi har haft längst engagemang:
          </p>
          <UlList>
            <li>Posten</li> <li>Telia</li>
            <li>BANQIT AB, delen som numera ingår i EDB Partner</li>
            <li>Boss Media</li>
            <li>Nyx Interactive</li>
            <li>Voiceprovider</li>
            <li>Ledarna</li>
          </UlList>
        </Container>
      </Wrapper>
      <hr />
    </>
  );
};

export default Clients;
