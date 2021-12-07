import React, { ChangeEvent, FC, useState } from "react";
import { Modal, PositionModel } from "../../shared/components/Modal";
import {
  StyledArrowRightIcon,
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
  StyledUserPublic,
  StylesListItem,
} from "./Styles";
import { HorizontalLine } from "../../shared/components/HorizontalLine";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalSectionMenu: FC<Props> = ({ title, isOpenModal, position, closeModal }) => {
  const [filterValue, setFilterValue] = useState("");

  const onIncludesSubstring = (itemValue: string): boolean => {
    return itemValue.toLocaleLowerCase().includes(filterValue);
  };

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <div className="filter-input">
          <StyledInput
            type="text"
            placeholder="Filter actions..."
            value={filterValue}
            onInput={(event: ChangeEvent<HTMLInputElement>) => setFilterValue(event.target.value)}
          />
        </div>
        <ul>
          <div className="part-container">
            {onIncludesSubstring("Delete") && (
              <StylesListItem onClick={closeModal}>
                <StyledDeleteOutlineOutlinedIcon />
                <span className="item-text">Delete</span>
                <div className="content-right">Del</div>
              </StylesListItem>
            )}
            {onIncludesSubstring("Duplicate") && (
              <StylesListItem>
                <StyledContentCopyIcon />
                <span className="item-text">Duplicate</span>
                <div className="content-right">Ctrl+D</div>
              </StylesListItem>
            )}
            {onIncludesSubstring("Turn into") && (
              <StylesListItem>
                <StyledAutorenewOutlinedIcon />
                <span className="item-text">Turn into</span>
                <div className="content-right">
                  <StyledArrowRightIcon />
                </div>
              </StylesListItem>
            )}
            {onIncludesSubstring("Turn into page in") && (
              <StylesListItem>
                <StyledSummarizeOutlinedIcon />
                <span className="item-text">Turn into page in</span>
                <div className="content-right">
                  <StyledArrowRightIcon />
                </div>
              </StylesListItem>
            )}
            {onIncludesSubstring("Copy link") && (
              <StylesListItem>
                <StyledInsertLinkOutlinedIcon />
                <span className="item-text">Copy link</span>
              </StylesListItem>
            )}
          </div>
          {onIncludesSubstring("Move to") && (
            <>
              <HorizontalLine />
              <div className="part-container">
                <StylesListItem>
                  <StyledKeyboardReturnIcon />
                  <span className="item-text">Move to</span>
                  <div className="content-right">Ctrl+Shift+P</div>
                </StylesListItem>
              </div>
            </>
          )}
          {onIncludesSubstring("Comment") && (
            <>
              <HorizontalLine />
              <div className="part-container">
                <StylesListItem>
                  <StyledCommentOutlinedIcon />
                  <span className="item-text">Comment</span>
                  <div className="content-right">Ctrl+Shift+M</div>
                </StylesListItem>
              </div>
            </>
          )}
          {onIncludesSubstring("Color") && (
            <>
              <HorizontalLine />
              <div className="part-container">
                <StylesListItem>
                  <StyledFormatPaintOutlinedIcon />
                  <span className="item-text">Color</span>
                  <div className="content-right">
                    <StyledArrowRightIcon />
                  </div>
                </StylesListItem>
              </div>
            </>
          )}
          <HorizontalLine />
        </ul>
        <StyledUserPublic>
          <span className="public-edited">Last edited by Sergey</span>
          <span>11/26/2021</span>
        </StyledUserPublic>
      </StyledModalContainer>
    </Modal>
  );
};
