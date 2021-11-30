import { Modal, PositionModel } from "../../shared/components/Modal";
import { FC } from "react";
import {
  StyledContentMenu,
  StyledFilterInput,
  StyledHorizontalLine,
  StyledIcon,
  StyledIconsBlockTitle,
  StyledModalContainer,
  StyledSentimentSatisfiedAltIcon,
} from "./Styles";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

interface Props {
  title: string;
  position: PositionModel;
  isOpenModal: boolean;
}

export const ModalIconsMenu: FC<Props> = ({ title, isOpenModal, position }) => {
  return (
    <Modal title={title} isOpen={isOpenModal} position={position}>
      <StyledModalContainer>
        <div className="menu-header">
          <ul className="menu-header-list">
            <li className="menu-header-list-item">Emoji</li>
            <li className="menu-header-list-item">Upload an image</li>
            <li className="menu-header-list-item">Link</li>
          </ul>
          <div className="menu-header-random">
            <StyledSentimentSatisfiedAltIcon />
            <span className="menu-header-random-text">Random</span>
          </div>
        </div>
        <StyledHorizontalLine />
        <StyledContentMenu>
          <StyledFilterInput type="text" placeholder="Filter..." />
          <div className="icons-block-recent">
            <StyledIconsBlockTitle>Recent</StyledIconsBlockTitle>
            <div className="icons-block-recent-icon">
              <StyledIcon className="icon-81" />
            </div>
          </div>
          <div className="icons-block-recent">
            <StyledIconsBlockTitle>Callout</StyledIconsBlockTitle>
            <div className="icons-block-recent-area">
              {Array(20)
                .fill("icon")
                .map((item, index) => (
                  <div className="icons-block-recent-icon">
                    <StyledIcon className={`${item}-${++index}`} />
                  </div>
                ))}
            </div>
          </div>
        </StyledContentMenu>
      </StyledModalContainer>
    </Modal>
  );
};
