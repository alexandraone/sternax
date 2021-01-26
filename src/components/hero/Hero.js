import React from 'react';
import HeroSmallImg from '../../static/images/hero-image-small.jpg';
import IMG_0649 from '../../static/images/IMG_0649_2.jpg';
import { BgImg, Brand, Button, Heading, Image, Wrapper } from './HeroStyle';

const Hero = () => {
  return (
    <Wrapper>
      <Heading>
        Välkommen till <Brand>Sternax Data AB</Brand>
      </Heading>
      <BgImg>
        <picture>
          <source srcSet={`${HeroSmallImg} 1x`} media='(max-width: 37.5em)' />
          <Image srcSet={`${IMG_0649} 2x`} alt='background' src={IMG_0649} />
        </picture>
      </BgImg>
      <Button smooth to='#services'>
        Läs mer
      </Button>
    </Wrapper>
  );
};

export default Hero;
