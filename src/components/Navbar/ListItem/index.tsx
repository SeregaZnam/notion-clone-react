import React, { FC } from "react";
import {
  StyledControlBlock,
  StyledControlPointIcon,
  StyledLiItem,
  StyledLink,
  StyledMoreHorizIcon,
  StyledPageIconDiv,
  StyledPageIconImg,
  StylesIconContainer,
} from "./Styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface Props {
  title: string;
  linkId: string;
  iconSrc: string;
  iconClass: string;
  defaultTitle?: string;
}

export const ListItem: FC<Props> = ({ title, iconSrc, iconClass, linkId, defaultTitle = "" }) => {
  let icon = null;

  if (iconSrc) {
    icon = (
      <StylesIconContainer>
        <StyledPageIconImg src={iconSrc} />
      </StylesIconContainer>
    );
  } else if (iconClass) {
    icon = (
      <StylesIconContainer>
        <StyledPageIconDiv className={iconClass} />
      </StylesIconContainer>
    );
  }

  return (
    <StyledLink to={`/${linkId}`} activeClassName="selected">
      <StyledLiItem>
        <div className="item-info">
          <ArrowRightIcon />
          <></>
          {icon}
          <span className="item-info-text">{title || defaultTitle}</span>
        </div>
        <StyledControlBlock>
          <StyledMoreHorizIcon />
          <StyledControlPointIcon />
        </StyledControlBlock>
      </StyledLiItem>
    </StyledLink>
  );
};
