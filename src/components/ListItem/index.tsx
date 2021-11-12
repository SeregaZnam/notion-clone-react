import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  StyledArrowRightIcon,
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
    <StyledLiItem>
      <Box sx={{ display: "flex" }}>
        <StyledArrowRightIcon />
        <StyledLink to={`/${linkId}`}>{title || defaultTitle}</StyledLink>
      </Box>
      <div>
        <StyledMoreHorizIcon />
        <StyledControlPointIcon />
      </div>
    </StyledLiItem>
  );
};
