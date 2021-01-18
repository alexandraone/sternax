import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { devices } from './helpers/devices';
import HeroSmallImg from './static/images/hero-image-small.jpg';
import IMG_0649 from './static/images/IMG_0649_2.jpg';

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.mobileL} {
    height: 80vh;
  }
`;

const BgImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  overflow: hidden;

  @media ${devices.mobileL} {
    height: 80vh;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Heading = styled.h1`
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3.5px;
  font-weight: 400;
  text-align: center;

  @media ${devices.mobileL} {
    font-size: 3.5rem;
  }

  @media ${devices.mobileS} {
    font-size: 3rem;
  }
`;

const Button = styled(Link)`
  border: 2px solid #fff;
  border-radius: 4px;
  padding: 1rem;
  letter-spacing: 2px;
  color: white;

  @media ${devices.mobileM} {
    padding: 1rem 0;
    letter-spacing: 2.5px;
    width: 100%;
    text-align: center;
  }
`;

const Brand = styled.div`
  margin-top: 1rem;
  font-weight: 600;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Heading>
        Välkommen till <Brand>Sternax Data AB</Brand>
      </Heading>
      <BgImg>
        <picture>
          <source srcSet={`${HeroSmallImg} 1x`} media='(max-width: 37.5em)' />
          <Image
            srcSet={`${HeroSmallImg} 1x, ${IMG_0649} 2x`}
            alt='background'
            src={IMG_0649}
          />
        </picture>
      </BgImg>
      <Button smooth to='#services'>
        Läs mer
      </Button>
    </Wrapper>
  );
};

export default Hero;
