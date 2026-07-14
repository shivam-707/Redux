import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

export default function Todo() {
    const todos = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const clickHandler = (id) => {
        // dispatch(deleteTodo(id));
        dispatch(deleteTodo({id}));
    }

    return (
        <div>
            <h1>Todo App</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.task} - {todo.isDone ? 'Done' : 'Pending'}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
