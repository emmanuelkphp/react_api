import React from 'react';
import { Link } from 'react-router-dom';

import Home from './pages/Home'
import MyRouter from './router/index';
import Navbar from './components/Navbar';

function App(){
  return(
      <div>
          <Navbar></Navbar>
          <MyRouter></MyRouter>
      </div>
  );
}

export default App;