import { faEnvelopeOpen, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HrLine from '../../ui/HrLine';
import { Container, Link, Paragraph, Wrapper } from './ContactStyle';

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
