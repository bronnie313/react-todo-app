import TodosList from './TodoList'
import InputTodo from './InputTodo'

const TodosLogic = () => {
    const todos = [
        {
            id: 1, 
            title: 'Setup development environment',
            completed: true,
        },
        {
            id: 1, 
            title: 'Develop website and add content',
            completed: false,
        },
        {
            id: 1, 
            title: 'Deploy to live server',
            completed: false,
        },

    ]
    return (
       <div>
        <InputTodo />
        <TodosList todosProps={todos} />
       </div>
    )
}

export default TodosLogic;