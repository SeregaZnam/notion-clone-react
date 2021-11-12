import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  StyledArrowRightIcon,
  StyledControlBlock,
  StyledControlPointIcon,
  StyledLiItem,
  StyledLink,
  StyledMoreHorizIcon,
} from "./Styles";
import { Box } from "@mui/system";

interface Props {
  title: string;
  defaultTitle?: string;
  linkId: string;
}

export const ListItem: FC<Props> = ({ title, defaultTitle = "", linkId }) => {
  return (
    <StyledLink to={`/${linkId}`}>
      <StyledLiItem>
        <Box sx={{ display: "flex" }}>
          <StyledArrowRightIcon />
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
