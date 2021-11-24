import React, { FC, memo, useState } from "react";
import { CommentModel } from "../../../types/Comment.model";
import { StyledComment, StyledCommentDate, StyledControlOptions } from "./Styles";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box } from "@mui/material";
import { useModal } from "../../../hooks/useModal";
import { ModalOptionsComments } from "../../ModalOptionsComments";
import { useAppDispatch } from "../../../store/hooks";
import { ModalEditorComment } from "../../ModalEditorComment";
import { fetchRemoveComment } from "../../../store/comment/commentSliceThunks";

interface Props {
  comment: CommentModel;
  optionText: string;
  onOptionClick: (commentId: string) => void;
}

export const Comment: FC<Props> = memo(({ comment, optionText, onOptionClick }) => {
  const formatter = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });
  const [commentDate, setCommentDate] = useState("Just now");
  const dispatch = useAppDispatch();

  const { title, position, isOpenModal, openModal, closeModal } = useModal({
    title: "commentOptions",
  });

  const {
    title: titleEditor,
    position: positionEditor,
    isOpenModal: isOpenModalEditor,
    openModal: openModalEditor,
    closeModal: closeModalEditor,
  } = useModal({
    title: "editorComment",
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

  const deleteComment = () => {
    dispatch(fetchRemoveComment({ id: comment.id }));
  };

  return (
    <StyledComment>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <StyledCommentDate>{commentDate}</StyledCommentDate>
        <StyledControlOptions>
          <div className="resolve-option" onClick={() => onOptionClick(comment.id)}>
            {optionText}
          </div>
          <MoreHorizIcon
            className="more-option-icon"
            onClick={(event) => openModal([`${event.pageX - 200}px`, `${event.pageY}px`])}
          />
        </StyledControlOptions>
      </Box>
      <div>{comment.text}</div>
      <img src={comment.imageBlob as unknown as string} />

      <ModalOptionsComments
        title={title}
        position={position}
        isOpenModal={isOpenModal}
        deleteComment={deleteComment}
        openEditorComment={(event) => {
          openModalEditor([`${event.pageX - 400}px`, `${event.pageY}px`]);
          closeModal();
        }}
      />

      <ModalEditorComment
        title={titleEditor}
        position={positionEditor}
        isOpenModal={isOpenModalEditor}
        comment={comment}
        closeModal={closeModalEditor}
      />
    </StyledComment>
  );
});
