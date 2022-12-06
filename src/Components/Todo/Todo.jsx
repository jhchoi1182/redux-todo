import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeTodos, deleteTodos, detailTodos } from '../../Redux/Modules/Todos';
import './Style.css';

const Todo = ({ todo }) => {
  const { id, state, title, contents } = todo;
  const dispatch = useDispatch();

  return (
    <div className="Todo">
      <div>
        <Link to="/TodoDetail" onClick={() => dispatch(detailTodos(id))}>상세보기</Link>
        <h2>{title}</h2>
        <p>{contents}</p>
      </div>
      <div className="select">
        <button className="delete-button" type="button" onClick={() => dispatch(deleteTodos(id))}>삭제하기</button>
        <button className="complete-button" type="button" onClick={() => dispatch(changeTodos(id))}>{state ? '취소' : '완료'}</button>
      </div>
    </div>
  );
};

export default Todo;
