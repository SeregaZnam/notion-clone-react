import styled from "styled-components";

export const StyledTextSectionContainer = styled.div`
  position: relative;
  transition: all 200ms;

  .page-option {
    position: absolute;
    left: -50px;
    top: 5px;
  }
`;

export const StyledTextSection = styled.div`
  display: flex;
  width: 100%;
  padding: 3px 2px;
  margin: 4px 0;
  border: none;
  outline: none;
  caret-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);
  white-space: break-spaces;
  word-break: break-word;

  :empty:after {
    content: attr(placeholder);
    cursor: text;
    color: rgba(55, 53, 47, 0.4);
  }
`;
