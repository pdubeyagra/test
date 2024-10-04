import TodoItem from './TodoItem';

export default function TodoList({ todos, toggleTodoCompletion, deleteTodo }) {
    if (todos.length === 0) {
        return <p>No todos available</p>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodoCompletion={toggleTodoCompletion}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}
