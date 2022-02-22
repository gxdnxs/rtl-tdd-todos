import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Learn TDD",
            done: true,
        },
        {
            id: 2,
            text: "use react-testing-library",
            done: true,
        },
    ]);
    
    return (
        <div>
            <TodoForm data-testid="helloworld" />
            <TodoList todos={todos}/>
        </div>
    );
};

export default TodoApp;
