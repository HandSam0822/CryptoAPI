import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HOME_URL, PROFILE_URL } from '../config/urls';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>                  
          <Route path={HOME_URL} element={<Home />} />     
          <Route path={`${PROFILE_URL}/:post`} element={<Profile />} />     
          <Route path="*" element={<Home />}></Route>                         
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
