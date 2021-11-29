import styled from "styled-components";

export const StyledCalloutSectionContainer = styled.section`
  position: relative;
  transition: all 200ms;

  .page-option {
    position: absolute;
    left: -50px;
    top: 3px;
  }
`;

export const StyledTextSection = styled.div`
  display: flex;
  background: rgb(241, 241, 239);
  padding: 16px 16px 16px 12px;
  margin: 4px 0;
`;

export const StyledIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 20px;
`;

export const StyledTextContent = styled.div`
  margin-left: 15px;
  max-width: 100%;
  width: 100%;
  padding-left: 2px;
  padding-right: 2px;
  font-size: 16px;
  line-height: 1.5;
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
