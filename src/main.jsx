import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from '@/components/Form';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
);
