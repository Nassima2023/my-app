import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import About from './about';
import NotFound from './NotFound';
import AppRouter from './AppRouter';
import Layout from './layout';
import './Layout.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter>
      <Layout>
        <App />
        <Home />
        <About />
        <NotFound />
      </Layout>
    </AppRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
