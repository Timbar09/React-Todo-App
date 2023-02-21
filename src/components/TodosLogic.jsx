import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
// import { useState, useEffect } from 'react';

const TodosLogic = () => {
  // const [todos, setTodos] = useState(getInitialTodos());

  // function getInitialTodos() {
  //   // getting stored items
  //   const temp = localStorage.getItem('todos');
  //   const savedTodos = JSON.parse(temp);
  //   return savedTodos || [];
  // }

  // useEffect(() => {
  //   // storing todos items
  //   const temp = JSON.stringify(todos);
  //   localStorage.setItem('todos', temp);
  // }, [todos]);

  return (
    <div>
      <InputTodo />
      <TodosList />
    </div>
  );
};

export default TodosLogic;
