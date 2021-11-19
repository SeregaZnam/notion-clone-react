import styled from "styled-components";

export const StyledTextSectionContainer = styled.section`
  position: relative;
  padding: 0 96px;
  transition: all 200ms;

  .page-option {
    position: absolute;
    left: 45px;
    top: 3px;
  }
`;

export const StyledTextSection = styled.section`
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
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  padding-left: 2px;
  padding-right: 2px;
  font-size: 16px;
  line-height: 1.5;
`;
