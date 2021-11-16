import React, { FC } from "react";
import { StyledLi, StyledModalContainer } from "./Styles";
import { Modal, PositionModel } from "../../shared/components/Modal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { StyledHorizontalLine } from "../Page/Styles";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  deleteComment: () => void;
  openEditorComment: (event) => void;
}

export const ModalOptionsComments: FC<Props> = ({
  title,
  position,
  isOpenModal,
  deleteComment,
  openEditorComment,
}) => {
  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <ul>
          <StyledLi onClick={openEditorComment}>
            <EditIcon /> <span className="option-text">Edit comment</span>
          </StyledLi>
          <StyledLi onClick={deleteComment}>
            <DeleteOutlineIcon /> <span className="option-text">Delete comment</span>
          </StyledLi>
          <StyledLi>
            <InsertLinkIcon />
            <span className="option-text">Copy link</span>
          </StyledLi>
          <StyledHorizontalLine />
          <StyledLi className="option-learn-comment">
            <HelpOutlineIcon className="option-learn-comment-icon" />
            <span className="options-text">Learn about comments</span>
          </StyledLi>
        </ul>
      </StyledModalContainer>
    </Modal>
  );
};
