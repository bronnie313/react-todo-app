import '../styles/TodoItem.css'
import { useState } from 'react';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
    const [editing, setEditing] = useState(false);

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = 'none';
    } else {
        editMode.display = 'none'
    }

    const handleEditing = () => {
        setEditing(true)
    }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
    }

    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
    };

    return <li className="item">
        <div className='content' style={viewMode}>
                <input 
                type="checkbox" 
                checked={itemProp.completed}
                onChange={() => handleChange(itemProp.id)}
                />
                <button onClick={handleEditing}>Edit</button>
                <button onClick={() => delTodo(itemProp.id)}>Delete</button>
                <span style={itemProp.completed ? completedStyle : null}>
                {itemProp.title}
                </span>
        </div>
        <input 
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        type="text"
         value={itemProp.title} className='textInput' style={editMode} />
    </li>;
};

export default TodoItem;