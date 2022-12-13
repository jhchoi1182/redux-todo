import { configureStore } from "@reduxjs/toolkit";
import todos from "../Modules/Todos";

const store = configureStore({
  reducer: { todos },
});

export default store;