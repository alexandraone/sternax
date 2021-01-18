import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import SideMenu from '../../components/sidemenu/SideMenu';
import Burger from '../../ui/Burger';
import Backdrop from '../Backdrop';
import { Container, MenuButton, RightLinks, StyledHeader } from './HeaderStyle';

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
