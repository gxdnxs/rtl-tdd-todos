import React, { useState, useCallback, useRef } from "react";
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

    const nextId = useRef(3); //새로 추가할 항목에서 사용할 id
    const onInsert = useCallback(
        (text) => {
            setTodos(
                todos.concat({
                    id: nextId.current,
                    text,
                    done: false,
                })
            );
            nextId.current++;
        },
        [todos]
    );
    const onToggle = useCallback((id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: todo.done } : todo
            )
        );
    }, [todos]);

    return (
        <div>
            <TodoForm data-testid="helloworld" onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
};

export default TodoApp;
