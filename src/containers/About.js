import React from 'react';
import styled from 'styled-components';
import { devices } from '../helpers/devices';
import BackgroundSternax from '../static/images/background-sternax.jpg';
import HrLine from '../ui/HrLine';

const Wrapper = styled.div`
  text-align: center;
  padding-bottom: 6rem;

  @media ${devices.mobileL} {
    padding-bottom: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 6rem;
  text-align: left;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

const Image = styled.img`
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

const Description = styled.div`
  margin: 0 4rem;

  @media ${devices.mobileL} {
    margin: 1rem;
  }

  @media ${devices.desktop} {
    max-width: 70%;
  }
`;

const About = () => {
  return (
    <>
      <Wrapper id='about'>
        <h1>Om oss</h1>
        <HrLine />
        <Container>
          <Image src={BackgroundSternax} alt='sternax' />
          <div style={{ marginBottom: '4rem' }}>
            <Description>
              <h3>Vilka vi är</h3>
              Företaget grundades redan 1990. I huvudsak är vi ett renodlat
              konsultbolag med tyngden inom design och utveckling, men vi har
              även kompetens inom teknisk projektledning, testledning mm. Vi
              arbetar mestadels i långa utvecklingsprojekt tätt tillsammans med
              kunden.
            </Description>
            <Description>
              <h3>Vad vi gör</h3>
              Verktyg och metoder varierar men helst använder vi nån Agile
              Scrum-liknande metod i antingen Microsoft-miljö med
              .NET/C#/C++/SQLServer eller Unix/linux med Java EE/mySQL/Oracle
              eller någon molnplattform t.ex. Salesforce. Vår absoluta
              uppfattning är att om man behärskar utvecklingsmetodik kan man
              använda i princip vilka verktyg som helst. Vi har ett brett
              partnersamarbete med flera mindre konsultbolag, vilket gör det
              möjligt att tillgodose kundens behov av speciella kompetenser.
            </Description>
          </div>
        </Container>
      </Wrapper>
      <hr />
    </>
  );
};

export default About;
