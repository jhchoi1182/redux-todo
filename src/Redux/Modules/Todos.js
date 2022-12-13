import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk(
  "GET_TODO",
  async (payload, thunkApi) => {
    try {
      const data = await axios.get("http://localhost:3001/todos")
      return thunkApi.fulfillWithValue(data.data)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const addTodos = createAsyncThunk(
  "ADD_TODO",
  async (todo, thunkApi) => {
    try {
      await axios.post("http://localhost:3001/todos", todo)
      return thunkApi.fulfillWithValue(todo)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const deleteTodos = createAsyncThunk(
  "DELETE_TODO",
  async (id, thunkApi) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`)
      return thunkApi.fulfillWithValue(id)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const changeTodos = createAsyncThunk(
  "CHANGE_TODO",
  async (todo, thunkApi) => {
    try {
      await axios.patch(`http://localhost:3001/todos/${todo.id}`, { state: !todo.state })
      return thunkApi.fulfillWithValue(todo)
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

export const detailTodos = createAsyncThunk(
  "DETAIL_TODO",
  async (id, thunkApi) => {
    try {
      const detail = await axios.get(`http://localhost:3001/todos/${id}`)
      return thunkApi.fulfillWithValue(detail.data);
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  }
)

const initialState = {
  todos: [],
  detail: {},
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = action.payload
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = [...state.todos, action.payload]
      })
      .addCase(addTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(changeTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changeTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todos = state.todos.map((todo) => (todo.id === action.payload.id ? { ...todo, state: !todo.state } : todo));
      })
      .addCase(changeTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(detailTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(detailTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload
      })
      .addCase(detailTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export default todoSlice.reducer;
