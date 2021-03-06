import {
  faDesktop,
  faLaptopCode,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HrLine from '../../ui/HrLine';
import {
  Container,
  Description,
  ServicesContainer,
  Wrapper,
} from './ServicesStyle';

const Services = () => {
  return (
    <>
      <Wrapper id='services'>
        <ServicesContainer>
          <h1>Tjänster</h1>
          <HrLine />
        </ServicesContainer>
        <Container>
          <div>
            <FontAwesomeIcon icon={faLaptopCode} color='#FFA500' size='3x' />
            <h3>Web Development</h3>
            <Description>
              Vi hjälper till med design och utveckling av er webbtjänst.
            </Description>
          </div>
          <div>
            <FontAwesomeIcon icon={faMobileAlt} color='#FFA500' size='3x' />
            <h3>Android App Development</h3>
            <Description>
              Vi har utvecklat ett antal Appar för android enheter.
            </Description>
          </div>
          <div>
            <FontAwesomeIcon icon={faDesktop} color='#FFA500' size='3x' />
            <h3>Software Development</h3>
            <Description>
              Vi stödjer er i ert systemutvecklingsprojekt oavsett verktyg.
            </Description>
            <Description>
              Vi har mångårig erfarenhet av Java, .Net, Salesforce m.fl.
              plattformar
            </Description>
          </div>
        </Container>
      </Wrapper>
      <hr />
    </>
  );
};

export default Services;
