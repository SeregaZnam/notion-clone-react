import React, { FC, useState } from "react";
import { CommentModel } from "../../types/Comment.model";
import { StyledComment, StyledCommentDate, StyledControlOptions } from "./Styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/material";
import { useModal } from "../../hooks/useModal";
import { ModalOptionsComments } from "../ModalOptionsComments";

interface Props {
  comment: CommentModel;
  optionText: string;
  onOptionClick: (pageId: string, commentId: string) => void;
}

export const Comment: FC<Props> = ({ comment, optionText, onOptionClick }) => {
  const formatter = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
  const [commentDate, setCommentDate] = useState("Just now");

  const { title, position, isOpenModal, openModal } = useModal({
    title: "commentOptions",
  });

  setInterval(() => {
    const date = new Date(comment.date);
    const deltaMinutes = Math.round((Date.now() - date.getTime()) / (1000 * 60));
    const deltaHours = Math.round((Date.now() - date.getTime()) / (1000 * 60 * 60));
    const deltaDays = Math.round((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24));
    const deltaWeeks = Math.round((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 7));

    if (deltaMinutes < 60) {
      setCommentDate(formatter.format(-deltaMinutes, "minutes"));
    } else if (deltaHours < 24) {
      setCommentDate(formatter.format(-deltaHours, "hours"));
    } else if (deltaDays < 7) {
      setCommentDate(formatter.format(-deltaDays, "days"));
    } else if (deltaWeeks < 1) {
      setCommentDate(formatter.format(-deltaWeeks, "weeks"));
    }
  }, 60000);

  return (
    <StyledComment>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <StyledCommentDate>{commentDate}</StyledCommentDate>
        <StyledControlOptions>
          <div className="resolve-option" onClick={() => onOptionClick(comment.pageId, comment.id)}>
            {optionText}
          </div>
          <MoreHorizIcon
            className="more-option-icon"
            onClick={(event) => openModal([`${event.pageX - 180}px`, `${event.pageY}px`])}
          />
        </StyledControlOptions>
      </Box>
      <div>{comment.text}</div>
      <img src={comment.imageBlob as unknown as string} />

      <ModalOptionsComments title={title} position={position} isOpenModal={isOpenModal} />
    </StyledComment>
  );
};
