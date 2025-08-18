import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';


const container = document.getElementById('root');
if (!container) {
  console.error('Root container not found');
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
