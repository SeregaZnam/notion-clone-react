import { createAsyncThunk } from "@reduxjs/toolkit";
import { PageModel } from "../types/Page.model";
import { NotionApi } from "../services/notionApi";
import { CommentModel } from "../types/Comment.model";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "./hooks";

export const fetchPageComments = createAsyncThunk(
  "comments/fetchPageComments",
  async ({ id: pageId }: Pick<PageModel, "id">) => {
    const response = await NotionApi.Comments.getPageComments(pageId);

    return await response.json();
  },
);

export const fetchAddPageComment = createAsyncThunk(
  "comments/fetchAddPageComment",
  async ({ pageId, text }: Pick<CommentModel, "pageId" | "text" | "imageBlob">) => {
    const comment: CommentModel = {
      pageId,
      text,
      id: uuidv4(),
      resolved: false,
      imageBlob: null,
      date: Date.now(),
    };
    const response = await NotionApi.Comments.addPageComment(comment);

    return await response.json();
  },
);

export const fetchRemovePageComment = createAsyncThunk(
  "comments/fetchRemovePageComment",
  async ({ id: commentId }: Pick<CommentModel, "id">) => {
    const response = await NotionApi.Comments.removePageComment(commentId);

    return await response.json();
  },
);

export const fetchResolveChangePageComment = createAsyncThunk(
  "comments/fetchChangePageComment",
  async (data: Pick<CommentModel, "id">) => {
    const comments = useAppSelector((state) => state.pagesComments.pagesComments);
    const currentPageComments = comments.find((comment) => comment.id === data.id);

    const response = await NotionApi.Comments.changePageComment({
      ...currentPageComments,
      resolved: true,
    });

    return await response.json();
  },
);
