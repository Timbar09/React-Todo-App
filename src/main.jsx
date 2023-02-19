import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from '@/components/TodoApp';
import Header from '@/components/Header/Header';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <Header />
    <TodoApp />
  </React.StrictMode>,
);
