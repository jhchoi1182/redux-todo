const ADD_TODOS = 'ADD_TODOS'
const DELETE_TODOS = 'DELETE_TODOS'
const CHANGE_TODOS = 'CHANGE_TODOS'

export const addTodos = payload => ({ type: ADD_TODOS, payload })
export const deleteTodos = payload => ({ type: DELETE_TODOS, payload })
export const changeTodos = payload => ({ type: CHANGE_TODOS, payload })

const initialState = {
  todos: [],
  // deleted: []
}

// const todoManage = todos => {
//   const notDone = todos.filter(todo => todo.state === false)
//   const isDone = todos.filter(todo => todo.state === true)
//   return { notDone, isDone }
// }

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      const { title, contents } = action.payload
      const todo = {
        id: `todos_${new Date().getTime() + Math.random()}`,
        state: false,
        title: title,
        contents: contents,
      };
      return {
        todos: [...state.todos, todo]
      }
    case DELETE_TODOS:
      // const deltedId = action.payload;
      const deletedTodo = todo.filter(todos => todos.id !== action.payload.id)
      return {
        // ...state,
        todo: [...state.todos, deletedTodo],
        // deleted: [...state.todos, deletedTodo].notDone
      }
    // case CHANGE_TODOS:
    //   return {
    //     todos: 
    //   }
    default:
      return state
  }
}

export default todoList