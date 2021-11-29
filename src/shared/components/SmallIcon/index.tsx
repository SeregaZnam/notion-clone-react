import React, { FC } from "react";
import { StyledPageIconDiv, StyledPageIconImg, StylesIconContainer } from "./Styles";
import { PageModel } from "../../../types/Page.model";
import { ModalIconsMenu } from "../../../components/ModalIconsMenu";

export const SmallIcon: FC<Partial<Pick<PageModel, "iconSrc" | "iconClass">>> = ({
  iconClass,
  iconSrc,
}) => {
  let template = null;

  if (iconSrc) {
    template = (
      <StylesIconContainer>
        <StyledPageIconImg src={iconSrc} />
      </StylesIconContainer>
    );
  } else if (iconClass) {
    template = (
      <StylesIconContainer>
        <StyledPageIconDiv className={iconClass} />
      </StylesIconContainer>
    );
  }

  return (
    <>
      {template}

      <ModalIconsMenu />
    </>
  );
};
