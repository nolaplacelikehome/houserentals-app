import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../dist/css/App.css';

import HomePage from './containers/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rent" element={<HomePage />} />
        <Route path="list" element={<HomePage />} />
        <Route path="signin" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));