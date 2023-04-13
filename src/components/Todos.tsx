import React from "react";
import TodoItem from "./TodoItem";
// interface todos {
//     id: string;
//     title: string;
//     completed: boolean;
// }
interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}
interface ITodosProps {
    todos: ITodo[];
    deleteTodo: (id: string) => void;
    handleChange: (id: string) => void;
}
const Todos = (props: ITodosProps) => {
    const { todos, deleteTodo, handleChange } = props;
    return (
        <ul>
            {todos.map((todo: ITodo, index: number) => (
                <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} handleChange={handleChange} />
            ))}
        </ul>
    );
};

export default Todos;
