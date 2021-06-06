import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const headerTitle = 'Our Latest Developments';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">{ headerTitle }</h1>
      </Link>
    </header>
  );
};

export default Header;
