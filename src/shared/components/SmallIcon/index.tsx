import React, { FC } from "react";
import { StyledPageIconDiv, StyledPageIconImg, StylesIconContainer } from "./Styles";
import { PageModel } from "../../../types/Page.model";
import { ModalIconsMenu } from "../../../components/ModalIconsMenu";
import { useModal } from "../../../hooks/useModal";

type Props = Partial<Pick<PageModel, "iconSrc" | "iconClass">>;

export const SmallIcon: FC<Props> = ({ iconClass, iconSrc }) => {
  let pageIconTemplate = null;
  const { title, position, isOpenModal, openModal, closeModal } = useModal({
    title: "iconsMenu",
  });

  if (iconSrc) {
    pageIconTemplate = <StyledPageIconImg src={iconSrc} />;
  } else if (iconClass) {
    pageIconTemplate = <StyledPageIconDiv className={iconClass} />;
  }

  return (
    <>
      <StylesIconContainer onClick={(event) => openModal([`${event.pageX}px`, `${event.pageY}px`])}>
        {pageIconTemplate}
      </StylesIconContainer>

      <ModalIconsMenu
        title={title}
        position={position}
        isOpenModal={isOpenModal}
        closeModal={closeModal}
      />
    </>
  );
};
