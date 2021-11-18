import React, { FC } from "react";
import { StyledItemIcon, StyledListItemOption } from "./Styles";

export const ListItemOption: FC<{ text: string }> = ({ text, children }) => {
  return (
    <StyledListItemOption>
      <StyledItemIcon>{children}</StyledItemIcon>
      <div>{text}</div>
    </StyledListItemOption>
  );
};
