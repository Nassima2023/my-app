import React from 'react';
import './App.scss';
import logo from './logo.png'
import logoWhite from './LogoPetit.png'

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <div className="logo">
            <img src={logo} alt='logo'></img>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/about">À propos</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className="footer-logo">
        <img src={logoWhite} alt='logo'></img>
        </div>
        <p>2020 Kasa, all right reserved</p>
      </footer>
    </div>
  );
}

export default Layout;
