import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoApp from "./components/TodoApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>
);

reportWebVitals();
