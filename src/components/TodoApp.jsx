import '@/styles/TodoApp.css';
import TodosHeader from '@/components/TodosHeader';
import TodosLogic from '@/components/TodosLogic';

function TodoApp() {
  return (
    <section className="todos">
      <div className="container">
        <div className="todos-content">
          <TodosHeader />
          <TodosLogic />
        </div>
      </div>
    </section>
  );
}

export default TodoApp;
