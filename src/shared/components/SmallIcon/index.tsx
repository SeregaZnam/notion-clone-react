import React, { FC } from "react";
import { StyledPageIconDiv, StyledPageIconImg, StylesIconContainer } from "./Styles";
import { PageModel } from "../../../types/Page.model";

export const SmallIcon: FC<Pick<PageModel, "iconSrc" | "iconClass">> = ({ iconClass, iconSrc }) => {
  if (iconSrc) {
    return (
      <StylesIconContainer>
        <StyledPageIconImg src={iconSrc} />
      </StylesIconContainer>
    );
  } else if (iconClass) {
    return (
      <StylesIconContainer>
        <StyledPageIconDiv className={iconClass} />
      </StylesIconContainer>
    );
  }

  return null;
};
