import React, { FC } from "react";
import {
  StyledArrowRightIcon,
  StyledControlBlock,
  StyledControlPointIcon,
  StyledLiItem,
  StyledLink,
  StyledMoreHorizIcon,
  StyledPageIcon,
} from "./Styles";

interface Props {
  title: string;
  srcIcon: string;
  linkId: string;
  defaultTitle?: string;
}

export const ListItem: FC<Props> = ({ title, srcIcon, linkId, defaultTitle = "" }) => {
  return (
    <StyledLink to={`/${linkId}`} activeClassName="selected">
      <StyledLiItem>
        <div className="item-info">
          <StyledArrowRightIcon />
          <StyledPageIcon src={srcIcon} />
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
