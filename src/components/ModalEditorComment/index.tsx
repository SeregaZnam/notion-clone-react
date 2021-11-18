import React, { FC, useState } from "react";
import { useModal } from "../../hooks/useModal";
import { Modal, PositionModel } from "../../shared/components/Modal";
import { InputPageComment } from "../InputPageComment";
import { StyledHorizontalLine } from "../Page/Styles";
import { useAppDispatch } from "../../store/hooks";
import { CommentModel } from "../../types/Comment.model";
import styled from "styled-components";
import { StyledForm, StyledInputComment } from "../InputPageComment/Styles";
import { fetchChangeComment } from "../../store/pagesCommentsThunks";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  comment: CommentModel;
}

const StyledInputPageComment = styled(InputPageComment)<any>`
  .test123 {
    padding: 20px !important;
  }
`;

export const ModalEditorComment: FC<Props> = ({ title, isOpenModal, position, comment }) => {
  const [fileBlob, setFileBlob] = useState(null);
  const dispatch = useAppDispatch();

  const onChangeComment = (text): void => {
    console.log(text);
    dispatch(
      fetchChangeComment({ text, id: comment.id }),
    );
  };

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      {/*<div style={{ padding: "4px 10px 0" }}>*/}
      <StyledInputPageComment
        className="test123"
        handleSubmit={onChangeComment}
        autoFocus={true}
        setFileBlob={setFileBlob}
      />
      {/*</div>*/}
    </Modal>
  );
};
