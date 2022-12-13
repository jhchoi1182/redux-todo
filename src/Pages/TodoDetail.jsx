import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { detailTodos } from "../Redux/Modules/Todos";
import "./Style.css";

const TodoDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.todos);
  const param = useParams().id;

  useEffect(() => {
    dispatch(detailTodos(param));
  }, []);

  if (detail) {
    // const {id, title, content} = detail
    return (
      <div className="detail-container">
        <div className="detail-top-box">
          <p>ID : {detail?.id}</p>
          <button
            className="detail-button"
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </button>
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
