"use client"
import { useState } from 'react';

function useTodos() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    console.log(" is custom hook working")

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodoCompletion = (id) => {
        setTodos(
            todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        );
    };

    return {
        todos,
        inputValue,
        setInputValue,
        addTodo,
        deleteTodo,
        toggleTodoCompletion,
    };
}

export  default useTodos;

