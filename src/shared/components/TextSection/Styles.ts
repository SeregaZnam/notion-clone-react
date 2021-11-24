import styled from "styled-components";

export const StyledTextSectionContainer = styled.div`
  position: relative;
  padding: 0 96px;
  transition: all 200ms;

  .page-option {
    position: absolute;
    left: 45px;
    top: 3px;
  }
`;

export const StyledTextSection = styled.div`
  display: flex;
  padding: 8px 16px 16px 0;
  margin: 4px 0;
  border: none;
  outline: none;
  caret-color: rgb(55, 53, 47);
  color: rgb(55, 53, 47);

  :empty:after {
    content: attr(placeholder);
  }
`;
