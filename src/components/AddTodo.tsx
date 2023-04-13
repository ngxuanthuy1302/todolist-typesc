import { title } from "process";
import React, { useState } from "react";

interface ITodo {
    id?: string;
    title?: string;
    completed?: boolean;
}
interface Title {
    title: string;
}
interface ITodosPropsAdd {
    // todos: ITodo[];
    addTodo: (id: string) => void;
}
interface HandleChangeTarget {
    target: HTMLInputElement;
}
function AddTodo(props: ITodosPropsAdd) {
    const [titleTodo, setTitleTodo] = useState<Title>({ title: "" });
    const { addTodo } = props;
    //set title khi Input đổi
    const onInputChange = (evt: HandleChangeTarget) => {
        setTitleTodo({
            title: evt.target.value,
        });
    };
    //Xử lí evt add
    const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(titleTodo.title);
        setTitleTodo({
            title: "",
        });
    };
    return (
        <form className="flex w-full" onSubmit={handleAddTodo}>
            <input
                type="text"
                placeholder="Add Todo..."
                className="placeholder-white placeholder-opacity-80 flex-8 text-[14px] py-1.5 px-[15px] font-normal border-none outline-none text-white bg-[#9cb4b2] w-4/5"
                value={titleTodo.title}
                onChange={onInputChange}
            />
            <input
                type="submit"
                value="Submit"
                className="outline-none w-1/5 flex-2 uppercase font-bold cursor-pointer  border-none bg-[#a1d6d2] text-white"
            />
        </form>
    );
}
export default AddTodo;
