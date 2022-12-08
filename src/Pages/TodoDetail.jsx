import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './Style.css';

const TodoDetail = () => {
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.Todos);
  const location = useLocation()

  const funcA= useCallback(()=>{
    if(location.pathname !== `/TodoDetail/${detail.id}`) navigate(-1)
  },[location, detail,navigate]) // 리렌더링 과정에서 함수의 새로 생성하는 것을 방지 (참조데이터 => 주소값 => 원시값은 재생성)

  useEffect(() => {
    funcA()
  }, [funcA])
  // useEffect 의존성 배열에 함수나 배열, 객체를 넣을 때에는 메모리 이슈, 무한루프 이슈를 해결하기 위해서 useMemo(배열, 객체), useCallback(함수)를 사용 해야함.
  // React Hook useEffect에 'location.pathname' 및 'navigate'과 같은 종속성이 없습니다. 포함하거나 종속성 배열을 제거합니다.

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
};

export default TodoDetail;
