import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
const appElement = <App />;

if (rootElement?.hasChildNodes()) {
  hydrate(appElement, rootElement);
} else {
  render(appElement, rootElement);
}
