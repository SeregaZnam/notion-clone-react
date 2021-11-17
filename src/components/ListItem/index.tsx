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
import { Box } from "@mui/system";

interface Props {
  title: string;
  defaultTitle?: string;
  srcIcon: string;
  linkId: string;
}

export const ListItem: FC<Props> = ({ title, defaultTitle = "", srcIcon, linkId }) => {
  return (
    <StyledLink to={`/${linkId}`}>
      <StyledLiItem>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StyledArrowRightIcon />
          {srcIcon && <StyledPageIcon src={srcIcon} />}
          {title || defaultTitle}
        </Box>
        <StyledControlBlock>
          <StyledMoreHorizIcon />
          <StyledControlPointIcon />
        </StyledControlBlock>
      </StyledLiItem>
    </StyledLink>
  );
};
