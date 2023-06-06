import TodoItem from "./TodoItem";

const TodosList = ({ todosProps }) => {
    return (
        <ul>
        {
            todosProps.map((todo) => (
                <TodoItem itemProp={todo} />
            ))
        }
    </ul>
    )
}

export default TodosList;