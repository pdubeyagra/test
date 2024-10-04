import useTodos from "../components/useTodos";
import TodoList from "../components/TodoList";

export default function Home() {
  const {
    todos,
    inputValue,
    setInputValue,
    addTodo,
    deleteTodo,
    toggleTodoCompletion,
  } = useTodos();

  return (
    <div>
      <h1>ToDo List</h1>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <TodoList
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
