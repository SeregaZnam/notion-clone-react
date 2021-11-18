import React, { FC } from "react";
import { Comment } from "./Comment";
import { useAppSelector } from "../../store/hooks";

interface Props {
  pageId: string;
  showResolvedComment?: boolean;
  optionText: string;
  onOptionClick: (commentId: string) => void;
}

export const CommentsSection: FC<Props> = ({
  pageId,
  showResolvedComment = false,
  optionText,
  onOptionClick,
}) => {
  const comments = useAppSelector((state) => state.comments.comments);
  const currentPageComments = comments.filter((comment) => comment.pageId === pageId);

  if (currentPageComments.length === 0) {
    return null;
  }

  return (
    <>
      {currentPageComments.map((comment) => {
        if (showResolvedComment === comment.resolved) {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              optionText={optionText}
              onOptionClick={() => onOptionClick(comment.id)}
            />
          );
        }
      })}
    </>
  );
};
