import React from "react";
import { Modal, PositionModel } from "../../shared/components/Modal";
import {
  StyledAutorenewOutlinedIcon,
  StyledCommentOutlinedIcon,
  StyledContentCopyIcon,
  StyledDeleteOutlineOutlinedIcon,
  StyledFormatPaintOutlinedIcon,
  StyledInput,
  StyledInsertLinkOutlinedIcon,
  StyledKeyboardReturnIcon,
  StyledModalContainer,
  StyledSummarizeOutlinedIcon,
  StylesList,
  StylesListItem,
} from "./Styles";
import { HorizontalLine } from "../../shared/components/HorizontalLine";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalSectionMenu = ({ title, isOpenModal, position, closeModal }) => {
  const onHandleInput = (event) => {
    console.log(1);
  };

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <div className="filter-input">
          <StyledInput type="text" placeholder="Filter actions..." onInput={onHandleInput} />
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
          <HorizontalLine />
          <StylesListItem>
            <StyledKeyboardReturnIcon />
            <span className="item-text">Move to</span>
          </StylesListItem>
          <HorizontalLine />
          <StylesListItem>
            <StyledCommentOutlinedIcon />
            <span className="item-text">Comment</span>
          </StylesListItem>
          <HorizontalLine />
          <StylesListItem>
            <StyledFormatPaintOutlinedIcon />
            <span className="item-text">Color</span>
          </StylesListItem>
          <HorizontalLine />
        </StylesList>
        <div>
          <span>Last edited by Sergey</span>
          <span>11/26/2021</span>
        </div>
      </StyledModalContainer>
    </Modal>
  );
};
