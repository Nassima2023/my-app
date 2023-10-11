import React from 'react';
import './Layout.scss';

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <img src="/path/vers/votre/logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <a href="/">Accueil</a>
          <a href="/about">À Propos</a>
        </nav>
      </header>
      <main className="content">{children}</main>
      <footer className="footer">
        <div className="footer-logo">
          <img src="/path/vers/votre/logo-footer.png" alt="Logo Footer" />
        </div>
        <div className="footer-text">2020 Kasa, all rights reserved.</div>
      </footer>
    </div>
  );
}

export default Layout;
