import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { devices } from './helpers/devices';

const StyledSideMenu = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.9);
  height: 100vh;
  width: 40%;
  z-index: 1210;

  transition: transform 0.3s ease-out;
  ${({ show }) =>
    show ? 'transform: translateX(0)' : 'transform: translateX(100%)'};

  @media ${devices.tablet} {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  &:first-child {
    margin-top: 100px;
  }

  a {
    color: #fff;
    margin: 30px 0 0 30px;
    cursor: pointer;
  }
`;

const SideMenu = ({ showMenu, setShowMenu }) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }

    return () => {
      document.body.style.overflowY = 'unset';
    };
  }, [showMenu]);

  return (
    <StyledSideMenu show={showMenu}>
      <Links>
        <HashLink smooth to='#services' onClick={() => setShowMenu(false)}>
          Tjänster
        </HashLink>
        <HashLink smooth to='#about' onClick={() => setShowMenu(false)}>
          Om oss
        </HashLink>
        <HashLink smooth to='#team' onClick={() => setShowMenu(false)}>
          Anställda
        </HashLink>
        <HashLink smooth to='#clients' onClick={() => setShowMenu(false)}>
          Kunder
        </HashLink>
        <HashLink smooth to='#contact' onClick={() => setShowMenu(false)}>
          Kontakta oss
        </HashLink>
      </Links>
    </StyledSideMenu>
  );
};

export default SideMenu;
