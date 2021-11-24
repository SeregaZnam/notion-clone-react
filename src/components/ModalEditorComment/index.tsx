import React, { FC, useEffect, useState } from "react";
import { Modal, PositionModel } from "../../shared/components/Modal";
import { InputPageComment } from "../InputPageComment";
import { useAppDispatch } from "../../store/hooks";
import { CommentModel } from "../../types/Comment.model";
import { fetchChangeComment } from "../../store/comment/commentSliceThunks";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  comment: CommentModel;
  closeModal: () => void;
}

export const ModalEditorComment: FC<Props> = ({
  title,
  isOpenModal,
  position,
  comment,
  closeModal,
}) => {
  const [fileBlob, setFileBlob] = useState(null);
  const dispatch = useAppDispatch();

  const onChangeComment = (text): void => {
    dispatch(fetchChangeComment({ text, id: comment.id, imageBlob: fileBlob }));
    closeModal();
  };

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <div style={{ width: "400px", padding: "4px 10px 0" }}>
        <InputPageComment
          handleSubmit={onChangeComment}
          autoFocus={true}
          setFileBlob={setFileBlob}
          initValueComment={comment.text}
          initImagePreviewSrc={comment.imageBlob as string}
        />
      </div>
    </Modal>
  );
};
