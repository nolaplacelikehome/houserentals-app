import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../dist/css/App.css';

import NavBar from './components/Navbar';
import HomePage from './containers/HomePage';
import RentPage from './containers/Rent';
import ListPage from './containers/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="rent" element={<RentPage />} />
          <Route path="list" element={<ListPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));