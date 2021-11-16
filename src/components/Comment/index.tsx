import React, { FC, useState } from "react";
import { CommentModel } from "../../types/Comment.model";
import { StyledComment, StyledCommentDate, StyledControlOptions } from "./Styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/material";

interface Props {
  comment: CommentModel;
  onResolveComment: (pageId: string, commentId: string) => void;
}

export const Comment: FC<Props> = ({ comment, onResolveComment }) => {
  const formatter = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
  const [commentDate, setCommentDate] = useState('Just now');

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
          <div
            className="resolve-option"
            onClick={() => onResolveComment(comment.pageId, comment.id)}
          >
            Resolve
          </div>
          <MoreHorizIcon className="more-option-icon" />
        </StyledControlOptions>
      </Box>
      <div>{comment.text}</div>
      <img src={comment.imageBlob as unknown as string} alt="" />
    </StyledComment>
  );
};
