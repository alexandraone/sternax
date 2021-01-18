import { faEnvelopeOpen, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import HrLine from '../ui/HrLine';

const Wrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 6rem;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
    margin: 1rem;
    width: 20rem;
  }
`;

const Paragraph = styled.p`
  text-transform: uppercase;
  padding-bottom: 3rem;
`;

const Link = styled.a`
  text-decoration: none;
  margin: 1rem;
  display: inline-block;
`;

const Contact = () => {
  return (
    <Wrapper id='contact'>
      <h1>Kontakta oss</h1>
      <HrLine />
      <Paragraph>Vi finns i Stockholm</Paragraph>
      <Container>
        <div>
          <FontAwesomeIcon icon={faMapPin} color='#FFA500' size='3x' />
          <br />
          <Link href='https://goo.gl/maps/ZkT5R6nvCA8mTzj56' target='_blank'>
            Sternax Data AB <br />
            Oxenstiernsgatan 23, 11527 <br />
            Stockholm
          </Link>
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelopeOpen} color='#FFA500' size='3x' />
          <br />
          <Link href='mailto:info@sternax.se' target='_blank'>
            info@sternax.se
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Contact;
