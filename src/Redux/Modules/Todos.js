import { getLocal, setLocal } from "../util/Local";

const ADD_TODOS = 'ADD_TODOS';
const DELETE_TODOS = 'DELETE_TODOS';
const CHANGE_TODOS = 'CHANGE_TODOS';
const DETAIL_TODOS = 'DETAIL_TODOS';


export const addTodos = (payload) => ({ type: ADD_TODOS, payload });
export const deleteTodos = (payload) => ({ type: DELETE_TODOS, payload });
export const changeTodos = (payload) => ({ type: CHANGE_TODOS, payload });
export const detailTodos = (payload) => ({ type: DETAIL_TODOS, payload });

const initialState = {
  todos: getLocal() ? getLocal() : [],
  // getLocal() ?? []로 줄일 수 있음
  detail: {}
};

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const { title, contents } = action.payload;
      const todo = {
        id: `todos_${new Date().getTime() + Math.random()}`,
        state: false,
        title: title,
        contents: contents,
      };
      setLocal([...state.todos, todo])
      return { todos: [...state.todos, todo] };

    case DELETE_TODOS:
      const deletedTodo = state.todos.filter((todos) => todos.id !== action.payload);
      // localStorage.setItem('todo', 'DELETED')
      setLocal(deletedTodo)
      return { ...state, todos: deletedTodo };

    case CHANGE_TODOS:
      const changeTodo = state.todos.map((todos) => (todos.id === action.payload ? { ...todos, state: !todos.state } : todos));
      setLocal(changeTodo)
      return { ...state, todos: changeTodo };

    case DETAIL_TODOS:
      const detailTodo = state.todos.find((todos) => todos.id === action.payload);
      return { ...state, detail: detailTodo };

    default:
      return state;
  }
};

export default todoList;
