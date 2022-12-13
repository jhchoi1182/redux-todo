import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Shared/Layout";
import Todo from "../Components/Todo/Todo";
import { getTodos } from "../Redux/Modules/Todos";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <Layout>
      <div>
        <h2>Working.. 🔥</h2>
        <div className="Todo-box">
          {todos.state && null}
          {!todos.state &&
            todos?.map((todo) => {
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
    </Layout>
  );
};

export default TodoList;
