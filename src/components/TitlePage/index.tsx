import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { changeTitle } from "../../store/pagesSlice";
import { StyledInput } from "./Styles";

export const TitlePage: FC<{ pageTitle: string }> = ({ pageTitle }) => {
  const [title, setTitle] = useState(pageTitle);
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle]);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    dispatch(changeTitle({ id, title: event.target.value }));
  };

  return <StyledInput placeholder="Untitled" value={title} onChange={onChangeTitle} />;
};
