import React, { FC } from "react";
import { StyledMenu } from "./Styles";
import ReactDOM from "react-dom";
import { IconsClasses } from "../../../BaseStyles";

export type PositionModel = Readonly<[x: string, y: string]>;

export interface ModalProps {
  title: string;
  isOpen: boolean;
  position: PositionModel;
  className?: string;
}

export const Modal: FC<ModalProps> = ({ title, isOpen, position, children, className }) => {
  if (!isOpen) {
    return null;
  }

  const [x, y] = position;

  return ReactDOM.createPortal(
    <>
      <IconsClasses>
        <StyledMenu title={title} positionX={x} positionY={y} className={className}>
          {children}
        </StyledMenu>
      </IconsClasses>
    </>,
    document.getElementById("modal"),
  );
};
