import './TodoApp.css';
import { useState } from 'react';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

function TodoApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <TodosLogic />
    </>
  );
}

export default TodoApp;
