import {
  faDesktop,
  faLaptopCode,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';
import HrLine from '../ui/HrLine';

const Wrapper = styled.div`
  text-align: center;
  padding: 6rem 0;
`;

const Container = styled.div`
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

const ServicesContainer = styled.div`
  margin-bottom: 5rem;
`;

const Description = styled.p``;

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
