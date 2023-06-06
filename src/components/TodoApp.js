import './TodoApp.css';
import Header from './Header';
import TodosLogic from './TodoLogic';

const TodoApp = () => {
  return (
   <div className='wrapper'>
      <div className='todos'>
        <Header />
        <TodosLogic />
      </div>
   </div>
  );
}

export default TodoApp;
