import React, { FC } from "react";
import {
  StyledControlBlock,
  StyledControlPointIcon,
  StyledLiItem,
  StyledLink,
  StyledMoreHorizIcon,
} from "./Styles";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SmallIcon } from "../../../shared/components/SmallIcon";

interface Props {
  title: string;
  linkId: string;
  iconSrc: string;
  iconClass: string;
  defaultTitle?: string;
}

export const ListItem: FC<Props> = ({ title, iconSrc, iconClass, linkId, defaultTitle = "" }) => {
  return (
    <StyledLink to={`/${linkId}`} activeClassName="selected">
      <StyledLiItem>
        <div className="item-info">
          <ArrowRightIcon />
          <SmallIcon iconSrc={iconSrc} iconClass={iconClass} />
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
