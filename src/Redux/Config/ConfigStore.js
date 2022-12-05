import { createStore } from "redux";
import Todos from "../Modules/Todos";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(Todos, composeWithDevTools());

export default store;