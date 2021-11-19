import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotionApi } from "../../services/notionApi";
import { PageModel } from "../../types/Page.model";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";

export const fetchPages = createAsyncThunk("pages/fetchPages", async () => {
  const response = await NotionApi.Pages.getPages();

  return await response.json();
});

export const fetchAddPage = createAsyncThunk("pages/fetchAddPage", async () => {
  const newPageData: Omit<PageModel, "comments"> = {
    id: uuidv4(),
    title: "",
    iconSrc: "",
    iconClass: "",
  };
  const response = await NotionApi.Pages.addPage(newPageData);

  return await response.json();
});

export const fetchChangePage = createAsyncThunk(
  "pages/fetchChangeTitle",
  async (pageData: Pick<PageModel, "id"> & Partial<Omit<PageModel, "id">>, { getState }) => {
    const state = getState() as RootState;
    const pages = state.pages.pages;
    const currentPage = pages.find((page) => page.id === pageData.id);

    const response = await NotionApi.Pages.changePage({
      ...currentPage,
      ...pageData,
    });

    return await response.json();
  },
);
