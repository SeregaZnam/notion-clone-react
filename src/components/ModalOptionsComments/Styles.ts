import styled from "styled-components";
import { StyledHorizontalLine } from "../Page/Styles";

export const StyledModalContainer = styled.div`
  min-width: 180px;
  padding-top: 6px;
  border-radius: 5px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";

  ${StyledHorizontalLine} {
    margin-top: 6px;
    margin-bottom: 0;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 28px;
  color: rgb(55, 53, 47);
  font-size: 14px;
  transition: background 0.02s ease-in-out;

  .option-text {
    margin-left: 5px;
  }

  &.option-learn-comment {
    color: rgba(55, 53, 47, 0.4);

    .option-learn-comment-icon {
      font-size: 14px;
    }

    .options-text {
      margin-left: 5px;
    }
  }

  &:hover {
    cursor: pointer;
    background: rgba(55, 53, 47, 0.08);
  }
`;
