import { createAsyncThunk } from "@reduxjs/toolkit";
import { NotionApi } from "../services/notionApi";
import { PageModel } from "../types/Page.model";
import { v4 as uuidv4 } from "uuid";

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
  async (page: PageModel) => {
    const response = await NotionApi.Pages.changePage(page);

    return await response.json();
  },
);
