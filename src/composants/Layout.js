import React from 'react'; 
import '../styles/App.scss'; 
import logo from '../icones/logo.png'; 
import logoWhite from '../icones/LogoPetit.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import '../composants/fontAwesome'; 

function Layout({ children }) {
  return (
    <div className="layout"> {/* Conteneur principal de mise en page */}
      <header> 

        <div className="logo"> 
            <img src={logo} alt='logo' className='logo-small'></img> 
        </div>

        <nav> 
          <ul> 
            <li> 
              <a href="/">Accueil</a> {/* Lien vers la page d'accueil */}
            </li>
            <li> 
              <a href="/about">À propos</a> {/* Lien vers la page "À propos" */}
            </li>
          </ul>
        </nav>

      </header>

      <main>{children}</main> {/* Section principale du site contenant le contenu dynamique (passé en tant que "children") */}

      <footer> 
        
        <div className="footer-logo"> 
          <img src={logoWhite} alt='logo'></img> 
        </div>

        <div className="copyright-container"> 
            <FontAwesomeIcon icon={['far', 'copyright']} className="copyright" /> 
            <p>2020 Kasa, all right reserved</p> 
        </div>

      </footer>
      
    </div>
  );
}


export default Layout;
