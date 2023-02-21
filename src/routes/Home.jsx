import TodosHeader from '@/components/TodosHeader';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <TodosHeader />
        <TodosLogic />
      </div>
    </div>
  );
};
export default Home;
