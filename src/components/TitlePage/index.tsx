import React, { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { StyledInput } from "./Styles";
import { fetchChangePage } from "../../store/page/pageSliceThunks";

export const TitlePage: FC<{ pageId: string; title: string }> = memo(({ pageId, title }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentTitle(title);
  }, [title]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTitle(event.target.value);
    dispatch(fetchChangePage({ id: pageId, title: event.target.value }));
  };

  return <StyledInput placeholder="Untitled" value={currentTitle} onChange={onChangeTitle} />;
});
