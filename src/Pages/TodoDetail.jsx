import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './Style.css';

const TodoDetail = () => {
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.Todos);
  const location = useLocation()

  useEffect(() => {
    if(location.pathname !== `/TodoDetail/${detail.id}`)
    navigate(-1)
  })
  
if (detail){
  // const {id, title, content} = detail
  return (
    <div className="detail-container">
      <div className="detail-top-box">
        <p>ID : {detail?.id}</p>
        <button className="detail-button" onClick={() => {navigate('/');}}>이전으로</button>
      </div>
      <div>
        <h2>{detail?.title}</h2>
        <p>{detail?.contents}</p>
      </div>
    </div>
  );
}
// else if (!detail) {
//   return <div>{navigate('/')}</div>
// }
};

export default TodoDetail;