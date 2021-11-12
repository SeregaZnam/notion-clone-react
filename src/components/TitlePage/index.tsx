import React, { ChangeEvent, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { changeTitle } from "../../store/pagesSlice";
import { StyledInput } from "./Styles";

export const TitlePage = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
    dispatch(changeTitle({ id, title: event.target.value }));
  };

  return <StyledInput placeholder="Untitled" value={title} onChange={onChangeTitle} />;
};
