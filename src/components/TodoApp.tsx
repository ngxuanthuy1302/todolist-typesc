import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Todos from "./Todos";
import axios from "axios";
import AddTodo from "./AddTodo";

interface ITodo {
    id: string;
    title: string;
    completed: boolean;
}
function TodoApp() {
    const [todos, setTodos] = useState<ITodo[]>([]); // khai bao kieu cua state o sau useState nhe
    //Delete
    const deleteTodo = (id: string) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((reponse) => {
            let newITodo = [...todos.filter((todo: ITodo) => todo.id !== id)];
            setTodos(newITodo);
        });
    };
    //Add
    const addTodo = (title: string) => {
        const todoData = {
            title: title,
            completed: false,
        };
        axios
            .post("https://jsonplaceholder.typicode.com/todos", todoData)
            .then((response) => {
                let newITodo = [...todos];
                newITodo.push(response.data);
                setTodos(newITodo);
            })
            .catch((err) => console.log(err));
    };
    //Change completed
    const handleCheckboxChange = (id: string) => {
        setTodos(
            todos.map((todo: ITodo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };
    //Effect
    useEffect(() => {
        const config = {
            params: {
                _limit: 10,
            },
        };
        axios
            .get("https://jsonplaceholder.typicode.com/todos", config)
            .then((response) => {
                setTodos(response.data);
            })
            .catch((err) => console.log(err));
    }, []);
    //Return render
    return (
        <div className="my-[100px] mx-auto max-w-[600px] border-solid border-1 border-[#678c89]">
            <Header />
            <AddTodo addTodo={addTodo} />
            {todos.length > 0 && <Todos todos={todos} handleChange={handleCheckboxChange} deleteTodo={deleteTodo} />}
        </div>
    );
}

export default TodoApp;
