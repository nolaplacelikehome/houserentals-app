import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../dist/css/App.css';

import HomePage from './containers/HomePage';
import RentPage from './containers/Rent';
import ListPage from './containers/List';
import SignIn from './containers/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rent" element={<RentPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));