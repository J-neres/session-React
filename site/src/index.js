import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Home from './pages/home';
import Efeito from './pages/efeito';
import VariavelEstado from './variavelEstado';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VariavelEstado />
  </React.StrictMode>
);


