import React, { FC } from "react";
import { Comment } from "../Comment";
import { CommentModel } from "../../types/Comment.model";

interface Props {
  comments: CommentModel[];
  onResolveComment: (pageId: string, commentId: string) => void;
}

export const CommentsSection: FC<Props> = ({ comments, onResolveComment }) => {
  if (comments.length === 0) {
    return null;
  }

  return (
    <>
      {comments.map((comment) => {
        if (!comment.resolved) {
          return <Comment comment={comment} key={comment.id} onResolveComment={onResolveComment} />;
        }
      })}
    </>
  );
};
