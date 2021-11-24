import React, { FC, useCallback } from "react";
import { CommentsSection } from "../CommentsSection";
import { Modal, PositionModel } from "../../shared/components/Modal";
import { useAppDispatch } from "../../store/hooks";
import { StyledModalContainer } from "./Styles";
import { fetchChangeComment } from "../../store/comment/commentSliceThunks";

interface Props {
  pageId: string;
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
}

export const ModalResolvedComments: FC<Props> = ({ pageId, title, position, isOpenModal }) => {
  const dispatch = useAppDispatch();
  const onReopenComment = useCallback((commentId: string) => {
    dispatch(fetchChangeComment({ id: commentId, resolved: false }));
  }, []);

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <CommentsSection
          pageId={pageId}
          showResolvedComment={true}
          optionText="Re-open"
          onOptionClick={onReopenComment}
        />
      </StyledModalContainer>
    </Modal>
  );
};
