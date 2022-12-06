import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const TodoDetail = () => {
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state);
  const { id, title, contents } = detail[0];

  return (
    <div className="detail-container">
      <div className="detail-top-box">
        <p>ID : {id}</p>
        <button className="detail-button" onClick={() => {navigate('/');}}>이전으로</button>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{contents}</p>
      </div>
    </div>
  );
};

export default TodoDetail;
