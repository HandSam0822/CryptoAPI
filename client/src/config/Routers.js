import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LOGIN_URL, HOME_URL, PROFILE_URL } from '../config/urls';
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
