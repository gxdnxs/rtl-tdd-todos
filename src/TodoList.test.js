import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";

describe('<TodoList />' , () => {
    const sampleTodos = [
        {
            id: 1,
            text: 'Learn TDD',
            done: true
        },
        {
            id: 2,
            text: 'use react-testing-library',
            done: true
        }
    ];
    it('renders todos properly', () => {
        const {getByText} = render(<TodoList todos={sampleTodos} />)
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    })
})