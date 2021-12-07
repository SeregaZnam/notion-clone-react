import styled from "styled-components";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FormatPaintOutlinedIcon from "@mui/icons-material/FormatPaintOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export const StyledModalContainer = styled.div`
  min-width: 240px;
  border-radius: 5px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";

  .content-list {
    display: flex;
    flex-direction: column;
  }

  .filter-input {
    padding: 6px 14px 6px;
  }

  .part-container {
    padding: 6px 0;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  margin-top: 8px;
  box-sizing: border-box;
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset;
  height: 28px;
  background: rgba(242, 241, 238, 0.6);
  border: none;
  border-radius: 3px;
  padding: 3px 6px;

  &::placeholder {
    color: rgba(55, 53, 47, 0.4);
  }
`;

export const StylesListItem = styled.li`
  display: flex;
  padding: 0 14px;
  align-items: center;
  line-height: 120%;
  width: 100%;
  min-height: 28px;
  font-size: 14px;
  box-sizing: border-box;
  color: rgb(55, 53, 47);
  fill: currentcolor;
  white-space: nowrap;

  :hover {
    cursor: pointer;
    background: rgb(55, 53, 47, 0.08);
  }

  .item-text {
    margin-left: 5px;
  }

  .content-right {
    width: 100%;
    text-align: right;
    color: rgba(55, 53, 47, 0.4);
    font-size: 12px;
    white-space: nowrap;
  }
`;

export const StyledUserPublic = styled.div`
  padding: 6px 14px;
  color: rgba(55, 53, 47, 0.4);
  font-size: 12px;
  display: flex;
  flex-direction: column;

  .public-edited {
    margin: 0 0 4px;
  }
`;

export const StyledDeleteOutlineOutlinedIcon = styled(DeleteOutlineOutlinedIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledContentCopyIcon = styled(ContentCopyIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledAutorenewOutlinedIcon = styled(AutorenewOutlinedIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledSummarizeOutlinedIcon = styled(SummarizeOutlinedIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledInsertLinkOutlinedIcon = styled(InsertLinkOutlinedIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledKeyboardReturnIcon = styled(KeyboardReturnIcon)`
  && {
    width: 19px;
    height: 19px;
    transform: rotate(180deg);
  }
`;

export const StyledCommentOutlinedIcon = styled(CommentOutlinedIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledFormatPaintOutlinedIcon = styled(FormatPaintOutlinedIcon)`
  && {
    width: 19px;
    height: 19px;
  }
`;

export const StyledArrowRightIcon = styled(ArrowRightIcon)`
  && {
    width: 19px;
    height: 19px;
    fill: rgba(55, 53, 47, 0.4);
  }
`;
