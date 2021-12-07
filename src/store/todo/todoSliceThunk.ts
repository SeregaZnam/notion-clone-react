import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoModel } from "../../types/Todo.model";
import { NotionApi } from "../../services/notionApi";
import { SectionType } from "../../types/SectionType.enum";
import { v4 as uuidv4 } from "uuid";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async ({ id: pageId }: Pick<TodoModel, "id">) => {
    const response = await NotionApi.Todos.getTodos(pageId);

    return await response.json();
  },
);

export const fetchAddTodo = createAsyncThunk(
  "todos/fetchAddTodo",
  async ({ pageId, order, text }: Omit<TodoModel, "id" | "type" | "check">) => {
    const newTodo: TodoModel = {
      text,
      order,
      pageId,
      check: false,
      id: uuidv4(),
      type: SectionType.Todo,
    };

    const response = await NotionApi.Todos.addTodo(newTodo);

    return await response.json();
  },
);
