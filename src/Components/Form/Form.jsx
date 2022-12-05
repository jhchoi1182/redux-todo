import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../Redux/Modules/Todos";
import "./Style.css";

const Form = () => {
  const [enteredTodo, setEnteredTodo] = useState([]);
  const dispatch = useDispatch();

  const onEnteredInputHandler = (event) => {
    const { value, name } = event.target;
    setEnteredTodo({ ...enteredTodo, [name]: value });
  };

  const onEnteredTodo = (event) => {
    event.preventDefault();
    dispatch(addTodos(enteredTodo));
    setEnteredTodo({ title: "", contents: "" });
  };

  return (
    <form className="input-container" onSubmit={onEnteredTodo}>
      <div className="input-container-insidebox">
        <label className="form-label">제목 </label>
        <input className="form-input" type="text" name="title" value={enteredTodo.title || ""} onChange={onEnteredInputHandler} required />
        <label className="form-label">내용 </label>
        <input className="form-input" type="text" name="contents" value={enteredTodo.contents || ""} onChange={onEnteredInputHandler} required />
      </div>
      <div>
        <button className="add-button" type="submit">
          추가하기
        </button>
      </div>
    </form>
  );
};

export default Form;
