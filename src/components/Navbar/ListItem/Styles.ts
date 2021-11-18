import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

export const StyledLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: rgba(25, 23, 17, 0.6);
  transition: all 0.1s;

  &.selected {
    background-color: rgba(55, 53, 47, 0.08);

    .item-info-text {
      color: black;
    }
  }

  :hover {
    background-color: rgba(55, 53, 47, 0.08);
    cursor: pointer;
  }
`;

export const StyledLiItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px 14px;
  height: 22px;

  .item-info {
    display: flex;
    align-items: center;

    .item-info-text {
      margin-left: 8px;
    }
  }
`;

export const StylesIconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const StyledPageIconImg = styled.img`
  display: ${(props) => (props.src || props.className ? "block" : "none")};

  margin-right: 10px;
  width: 14px;
  height: 14px;
`;

export const StyledPageIconDiv = styled.div`
  transform: scale(0.3);
  transform-origin: left top;
  width: 14px;
  height: 14px;
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
