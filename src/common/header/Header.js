import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import Backdrop from '../../Backdrop';
import { devices } from '../../helpers/devices';
import SideMenu from '../../SideMenu';
import Burger from '../../ui/Burger';

const StyledHeader = styled.header`
  font-size: 1.25rem;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  color: black;
  height: 100px;
  width: 100%;
  transition: all 0.5s ease-in-out;
  z-index: 1000;

  &.active {
    background: rgba(0, 0, 0, 0.8);
    color: white;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;

  & a:first-of-type {
    flex-grow: 1;
  }
`;

const RightLinks = styled.div`
  font-size: 14px;
  & > * {
    margin: 0 1.5rem;
  }

  @media ${devices.tablet} {
    display: none;
  }
`;

const MenuButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  const backdropClickHandler = () => {
    setShowMenu(false);
  };

  return (
    <StyledHeader className={scrolled ? 'header active' : 'header'}>
      <Container>
        <HashLink smooth to='#top'>
          Sternax Data AB
        </HashLink>
        <RightLinks>
          <HashLink smooth to='#services'>
            Tjänster
          </HashLink>
          <HashLink smooth to='#about'>
            Om oss
          </HashLink>
          <HashLink smooth to='#team'>
            Anställda
          </HashLink>
          <HashLink smooth to='#clients'>
            Kunder
          </HashLink>
          <HashLink smooth to='#contact'>
            Kontakta oss
          </HashLink>
        </RightLinks>
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <Burger open={showMenu} scrolled={scrolled} />
        </MenuButton>
      </Container>
      <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <Backdrop backdropClick={backdropClickHandler} />}
    </StyledHeader>
  );
};

export default Header;
