import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//GLOBAL STYLES
import { GlobalStyles } from './globalStyles/GlobalStyles';

//PAGES
import { HomePage } from './pages/HomePage';
import { CarConfigurator } from './pages/CarConfigurator';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/home' element={<Navigate to='/'/>}/>
          <Route path='/car-configurator-reactjs' element={<Navigate to='/'/>}/>
          <Route path='/porsche911' element={<CarConfigurator />}/>
          <Route path='/porschePanamera' element={<CarConfigurator />}/>
          <Route path='/porscheMacan' element={<CarConfigurator />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
