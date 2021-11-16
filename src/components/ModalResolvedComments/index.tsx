import React, { FC } from "react";
import { CommentsSection } from "../CommentsSection";
import { Modal, PositionModel } from "../../shared/components/Modal";
import { reopenComment } from "../../store/pagesSlice";
import { CommentModel } from "../../types/Comment.model";
import { useAppDispatch } from "../../store/hooks";
import { StyledModalContainer } from "./Styles";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  comment: CommentModel[];
}

export const ModalResolvedComments: FC<Props> = ({ title, position, isOpenModal, comment }) => {
  const dispatch = useAppDispatch();
  const onReopenComment = (pageId: string, commentId: string) => {
    dispatch(reopenComment({ pageId, commentId }));
  };

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <CommentsSection
          comments={comment}
          showResolvedComment={true}
          optionText="Re-open"
          onOptionClick={onReopenComment}
        />
      </StyledModalContainer>
    </Modal>
  );
};
