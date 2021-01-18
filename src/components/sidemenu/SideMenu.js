import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Links, StyledSideMenu } from './SideMenuStyle';

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
