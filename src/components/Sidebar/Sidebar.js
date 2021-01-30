import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            Tentang Kami
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Layanan
          </SidebarLink>
          <SidebarLink to='projects' onClick={toggle}>
            Projek
          </SidebarLink>
          <SidebarLink to='team' onClick={toggle}>
            Tim
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Kontak
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
