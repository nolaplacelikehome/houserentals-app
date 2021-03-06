import React from 'react';
import { createRoot } from 'react-dom/client';
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

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
