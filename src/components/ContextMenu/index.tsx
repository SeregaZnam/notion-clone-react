import React, { FC, useCallback, useEffect, useState } from "react";
import { StyledContextMenu } from "./Styles";
import { useAppSelector } from "../../store/hooks";

export const ContextMenu: FC = ({ children }) => {
  const { open, position, node } = useAppSelector((state) => state.modal);
  const [x, y] = position;

  return (
    open && (
      <StyledContextMenu positionX={x} positionY={y}>
        {node}
        {children}
      </StyledContextMenu>
    )
  );
};
