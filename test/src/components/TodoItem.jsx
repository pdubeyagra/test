export default function TodoItem({ todo, toggleTodoCompletion, deleteTodo }) {
  return (
    <div className="flex  justify-between items-center p-4 border-b border-gray-200">
      <span
        onClick={() => toggleTodoCompletion(todo.id)}
        className="{`text-lg font-bold ${todo.completed ? 'line-through' : ''`}"
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}
