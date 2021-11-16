import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export const StyledLiItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px 14px;
  height: 22px;
  transition: all 0.1s;

  :hover {
    background-color: rgba(55, 53, 47, 0.08);
    cursor: pointer;
  }
`;

export const StyledPageIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 10px;
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)`
  margin-right: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const StyledMoreHorizIcon = styled(MoreHorizIcon)`
  width: 20px !important;
  height: 20px !important;
  color: rgba(55, 53, 47, 0.4);

  :hover {
    background-color: rgba(55, 53, 47, 0.1);
    border-radius: 3px;
  }
`;

export const StyledControlPointIcon = styled(ControlPointIcon)`
  width: 20px !important;
  height: 20px !important;
  color: rgba(55, 53, 47, 0.4);

  :hover {
    background-color: rgba(55, 53, 47, 0.1);
    border-radius: 3px;
  }
`;

export const StyledControlBlock = styled.div`
  visibility: hidden;

  ${StyledLiItem}:hover & {
    visibility: visible;
  }
`;
