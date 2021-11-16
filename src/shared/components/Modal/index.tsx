import React, { FC } from "react";
import { StyledMenu } from "./Styles";
import ReactDOM from "react-dom";

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
      <StyledMenu title={title} positionX={x} positionY={y} className={className}>
        {children}
      </StyledMenu>
    </>,
    document.getElementById("modal"),
  );
};
