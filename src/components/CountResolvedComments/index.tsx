import React, { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { StyledCountResolvedComments } from "./Styles";
import { useAppSelector } from "../../store/hooks";
import { ModalResolvedComments } from "../ModalResolvedComments";
import { useModal } from "../../hooks/useModal";

export const CountResolvedComments: FC<{ pageId: string }> = ({ pageId }) => {
  const { title, position, isOpenModal, openModal } = useModal({
    title: "commentResolved",
  });
  const comments = useAppSelector((state) => state.pagesComments.pagesComments);
  const currentPageComments = comments.filter((comment) => comment.pageId === pageId);
  const countResolvedComments = currentPageComments.reduce((count, comment) => {
    return comment.resolved ? count + 1 : count;
  }, 0);

  if (countResolvedComments === 0) {
    return null;
  }

  return (
    <>
      <StyledCountResolvedComments
        onClick={(event) => openModal([`${event.pageX}px`, `${event.pageY}px`])}
      >
        <CheckIcon className="check-count-icon" />
        <div>{countResolvedComments} resolved comment</div>
      </StyledCountResolvedComments>
      <ModalResolvedComments
        pageId={pageId}
        title={title}
        position={position}
        isOpenModal={isOpenModal}
      />
    </>
  );
};
