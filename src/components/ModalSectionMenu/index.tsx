import React from "react";
import { Modal, PositionModel } from "../../shared/components/Modal";
import {
  StyledAutorenewOutlinedIcon,
  StyledContentCopyIcon,
  StyledDeleteOutlineOutlinedIcon,
  StyledInput,
  StyledInsertLinkOutlinedIcon,
  StyledModalContainer,
  StyledSummarizeOutlinedIcon,
  StylesList,
  StylesListItem,
} from "./Styles";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalSectionMenu = ({ title, isOpenModal, position, closeModal }) => {
  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <div className="filter-input">
          <StyledInput type="text" placeholder="Filter actions..." />
        </div>
        <StylesList>
          <StylesListItem onClick={closeModal}>
            <StyledDeleteOutlineOutlinedIcon />
            <span className="item-text">Delete</span>
          </StylesListItem>
          <StylesListItem>
            <StyledContentCopyIcon />
            <span className="item-text">Duplicate</span>
          </StylesListItem>
          <StylesListItem>
            <StyledAutorenewOutlinedIcon />
            <span className="item-text">Turn into</span>
          </StylesListItem>
          <StylesListItem>
            <StyledSummarizeOutlinedIcon />
            <span className="item-text">Turn into page in</span>
          </StylesListItem>
          <StylesListItem>
            <StyledInsertLinkOutlinedIcon />
            <span className="item-text">Copy link</span>
          </StylesListItem>
        </StylesList>
      </StyledModalContainer>
    </Modal>
  );
};
