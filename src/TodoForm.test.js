import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm />", () => {
    const setup = (props = {}) => {
        const utils = render(<TodoForm {...props} />);
        const { getByText, getByPlaceholderText } = utils;
        const input = getByPlaceholderText("할 일을 입력하세요~");
        const button = getByText("등록");
        return { ...utils, input, button };
    };
    it("has input and a button", () => {
        // const {getByText, getByPlaceholderText} = render(<TodoForm />);
        // getByPlaceholderText('할 일을 입력하세요~'); //input 있는지 없는지
        // getByText('등록'); //button이 있는지 없는지
        const { input, button } = setup();
        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
    });
    it("change input", () => {
        // const {getByPlaceholderText} =render(<TodoForm />);
        // const input = getByPlaceholderText('할 일을 입력하세요~');
        // fireEvent.change(input, {target: {value: 'Learn TDD'}});
        // expect(input).toHaveAttribute('value', 'Learn TDD');
        const { input } = setup();
        fireEvent.change(input, { target: { value: "Learn TDD" } });
        expect(input).toHaveAttribute("value", "Learn TDD");
    });
    it("calls onInsert and clears input", () => {
        // const onInsert = jest.fn();
        // const {getByText, getByPlaceholderText} = render(<TodoForm onInsert={onInsert} />);
        // const input =getByPlaceholderText('할 일을 입력하세요~');
        // const button = getByText('등록');
        // fireEvent.change(input, {target: {value: 'Learn TDD'}});
        // fireEvent.click(button);
        // expect(onInsert).toBeCalledWith('Learn TDD');
        // expect(input).toHaveAttribute('value', '');
        const onInsert = jest.fn();
        const { input, button } = setup({ onInsert });
        fireEvent.change(input, { target: { value: "Learn TDD" } });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith("Learn TDD");
        expect(input).toHaveAttribute("value", "");
    });
});
