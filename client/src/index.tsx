import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../dist/css/App.css';

import HomePage from './containers/HomePage';

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));