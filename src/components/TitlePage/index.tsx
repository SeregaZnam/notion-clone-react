import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { StyledInput } from "./Styles";
import { fetchChangePage } from "../../store/pageSliceThunks";
import { PageModel } from "../../types/Page.model";

export const TitlePage: FC<{ page: PageModel }> = ({ page }) => {
  const [title, setTitle] = useState(page.title);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTitle(page.title);
  }, [page.title]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    dispatch(fetchChangePage({ ...page, title: event.target.value }));
  };

  return <StyledInput placeholder="Untitled" value={title} onChange={onChangeTitle} />;
};
