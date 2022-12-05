import React from "react";
import { useDispatch } from "react-redux";
import { changeTodos, deleteTodos } from "../../Redux/Modules/Todos";
import "./Style.css";

const Todo = ({ todo }) => {
  const { id, title, contents } = todo;
  const dispatch = useDispatch();

  return (
    <div className="Todo">
      <div>
        <h2>{title}</h2>
        <p>{contents}</p>
      </div>
      <div className="select">
        <button className="delete-button" type="button" onClick={() => dispatch(deleteTodos(id))}>
          삭제하기
        </button>
        <button className="complete-button" type="button" onClick={() => dispatch(changeTodos(id))}>
          이동
        </button>
      </div>
    </div>
  );
};

export default Todo;
