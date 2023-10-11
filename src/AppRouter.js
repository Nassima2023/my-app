// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importez les composants de vos différentes pages
import Home from './home.js';
import About from './about.js';
import NotFound from './NotFound.js';

function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Configuration des routes */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        {/* Route pour la page d'erreur */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
