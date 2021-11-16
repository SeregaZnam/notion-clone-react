import React, { FC } from "react";
import { Comment } from "../Comment";
import { CommentModel } from "../../types/Comment.model";

interface Props {
  comments: CommentModel[];
  showResolvedComment?: boolean;
  optionText: string;
  onOptionClick: (pageId: string, commentId: string) => void;
}

export const CommentsSection: FC<Props> = ({
  comments,
  showResolvedComment = false,
  optionText,
  onOptionClick,
}) => {
  if (comments.length === 0) {
    return null;
  }

  return (
    <>
      {comments.map((comment) => {
        if (showResolvedComment === comment.resolved) {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              optionText={optionText}
              onOptionClick={onOptionClick}
            />
          );
        }
      })}
    </>
  );
};
