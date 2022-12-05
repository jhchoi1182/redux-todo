import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Components/Todo/Todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  return (
    <div>
      <h2>Working.. 🔥</h2>
      <div className="Todo-box">
        {todos.map((todo) => {
          return todo.state ? null : <Todo key={todo.id} todo={todo} />;
        })}
      </div>
      <h2>Done..! 🎉</h2>
      <div className="Todo-box">
        {todos.map((todo) => {
          return todo.state ? <Todo key={todo.id} todo={todo} /> : null;
        })}
      </div>
    </div>
  );
};

export default TodoList;
