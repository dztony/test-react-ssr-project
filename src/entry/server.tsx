import React from 'react';
import { renderToString } from 'react-dom/server';
import App from "../App.tsx";

export function render(): string {
  const domString = renderToString(<App />);

  return domString;
}
