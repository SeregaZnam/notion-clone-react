import React, { FC, useContext } from "react";
import { Modal, PositionModel } from "../../shared/components/Modal";
import {
  StyledCalendarViewDayOutlinedIcon,
  StyledHeaderTitle,
  StyledModalContainer,
  StyledTextFieldsIcon,
  StylesListItem,
} from "./Styles";
import { useAppDispatch } from "../../store/hooks";
import { fetchAddTextBlock, fetchRemoveTextBlock } from "../../store/text-block/textBlockThunks";
import { PageIdContext } from "../Page";
import { fetchAddCallout } from "../../store/callout/calloutSliceThunks";
import { TextBlockIdContext } from "../../shared/components/TextSection";

interface Props {
  nextOrder: number;
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalAddBlock: FC<Props> = ({
  nextOrder,
  title,
  isOpenModal,
  position,
  closeModal,
}) => {
  const pageId = useContext(PageIdContext);
  const textBlockId = useContext(TextBlockIdContext);
  const dispatch = useAppDispatch();

  const addCallout = () => {
    if (textBlockId) {
      dispatch(fetchRemoveTextBlock({ id: textBlockId }));
    }

    dispatch(fetchAddCallout({ pageId, text: "", order: nextOrder }));
    closeModal();
  };

  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <StyledHeaderTitle>Basic blocks</StyledHeaderTitle>
        <ul>
          <StylesListItem onClick={closeModal}>
            <StyledTextFieldsIcon />
            <div className="content-block">
              <h4>Text</h4>
              <span className="content-block-describe">Just start writing with plain text.</span>
            </div>
          </StylesListItem>
          <StylesListItem onClick={addCallout}>
            <StyledCalendarViewDayOutlinedIcon />
            <div className="content-block">
              <h4>Callout</h4>
              <span className="content-block-describe">Make writing stand out.</span>
            </div>
          </StylesListItem>
        </ul>
      </StyledModalContainer>
    </Modal>
  );
};
