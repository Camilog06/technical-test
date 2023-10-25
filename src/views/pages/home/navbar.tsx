import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import TusApuestas from '@/views/components/tusApuestas';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { setUrlParams } from '@/modules/nav/actions';
import LogoNav from '@/assets/red.jpg';
import ButtonNav from '@/assets/Button.svg';

const ApNavbar: FC = ({ isOpen, toggleTusApuestas }) => {
  const dispatch = useDispatch(); 

  return (
    <div className="navbar-container">
    <header className="navbar">
      <Navbar className="nav justify-content-between align-items-center">
        <NavbarBrand to="/" tag={Link} title="Home">
          <figure>
            <img src={LogoNav} alt="logo-nav" className="red" />
          </figure>
        </NavbarBrand>
        <NavItem>
          <h1 className="h1">Red Valley Apuestas</h1>
        </NavItem>
        <NavItem>
          <NavbarBrand to="/" tag={Link} className="your" onClick={toggleTusApuestas}>
            Tus apuestas
            <img src={ButtonNav} alt="toggle" />
          </NavbarBrand>
        </NavItem>
      </Navbar>
    </header>
    </div>
  );
};

export default ApNavbar




