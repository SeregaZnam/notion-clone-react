import { TodoModel } from "../../types/Todo.model";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAddTodo, fetchTodos } from "./todoSliceThunk";

interface TodoState {
  todos: TodoModel[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });

    builder.addCase(fetchAddTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
    });
  },
});

export const todosReducer = todoSlice.reducer;
