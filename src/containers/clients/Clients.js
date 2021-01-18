import React from 'react';
import HrLine from '../../ui/HrLine';
import { Container, Heading, UlList, Wrapper } from './ClientsStyle';

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
