import React from 'react';
import BackgroundSternax from '../../static/images/background-sternax.jpg';
import HrLine from '../../ui/HrLine';
import { Container, Description, Image, Wrapper } from './AboutStyle';
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
