import './TodoApp.css';
import { useState } from 'react';
import TodosHeader from '@/components/TodosHeader';
import TodosLogic from '@/components/TodosLogic';

function TodoApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodosHeader />
      <TodosLogic />
    </>
  );
}

export default TodoApp;
