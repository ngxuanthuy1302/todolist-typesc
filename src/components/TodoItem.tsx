import React from "react";

interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}
interface ITodoItemProps {
    key: number;
    todo: ITodo;
    deleteTodo: (id: string) => void;
    handleChange: (id: string) => void;
}

// gia su muon truyen ham xuong nhe, o ben TodoApp
const TodoItem = (props: ITodoItemProps) => {
    const { id, title, completed } = props.todo;
    const { deleteTodo, handleChange } = props;
    const classNoCompleted = "whitespace-nowrap overflow-hidden text-ellipsis inline-block w-[90%] h-fit";
    const classCompleted = "whitespace-nowrap overflow-hidden text-ellipsis inline-block w-[90%] h-fit completed";
    return (
        <li className="flex items-center px-4 py-2 border-solid border-[1px] border-[#678c89] border-t-0">
            <input className="mr-2.5" type="checkbox" checked={completed} onChange={() => handleChange(id)}></input>
            <span className={completed ? classCompleted : classNoCompleted}>{title}</span>
            <button className="bg-[#d35e0f] text-white rounded-[50%] w-8 h-8 cursor-pointer outline-none float-right" onClick={() => deleteTodo(id)}>
                X
            </button>
        </li>
    );
};

export default TodoItem;
