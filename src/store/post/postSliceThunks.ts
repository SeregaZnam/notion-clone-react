import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../../services/api";
import { PostModel } from "../../types/Post.model";
import { v4 as uuidv4 } from "uuid";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await Api.Posts.getPosts();

      if (!response.ok) {
        return rejectWithValue("Server Error!");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddPost = createAsyncThunk(
  "posts/fetchAddPost",
  async (
    postData: Pick<PostModel, "text" | "author" | "imageBlob" | "srcAudioFile">,
    { rejectWithValue }
  ) => {
    try {
      const newPost: PostModel = {
        id: uuidv4(),
        text: postData.text,
        author: postData.author,
        likes: 0,
        dislikes: 0,
        date: new Date().toDateString(),
        imageBlob: postData.imageBlob,
        srcAudioFile: postData.srcAudioFile,
      };
      const response = await Api.Posts.addPost(newPost);

      if (!response.ok) {
        return rejectWithValue("Server Error!");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddAudio = createAsyncThunk(
  "posts/fetchAddAudio",
  async (audioFile: File, { rejectWithValue }) => {
    try {
      const response = await Api.Posts.addAudio(audioFile);

      if (!response.ok) {
        return rejectWithValue("Server Error!");
      }

      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchChangePost = createAsyncThunk(
  "posts/fetchChangePost",
  async (postData: PostModel, { rejectWithValue }) => {
    try {
      const response = await Api.Posts.changePost(postData);

      if (!response.ok) {
        return rejectWithValue("Can't change task. Server error.");
      }
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (postId: Pick<PostModel, "id">, { rejectWithValue }) => {
    try {
      const response = await Api.Posts.removePost(postId.id);

      if (!response.ok) {
        return rejectWithValue("Can't delete task. Server error.");
      }
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
