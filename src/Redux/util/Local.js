export const getLocal = () => {
  return JSON.parse(localStorage.getItem('todolist'))
}
export const setLocal = (todo) => {
  localStorage.setItem('todolist', JSON.stringify(todo))
}
