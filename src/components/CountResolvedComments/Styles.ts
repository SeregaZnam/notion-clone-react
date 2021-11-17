import styled from "styled-components";

export const StyledCountResolvedComments = styled.div`
  display: inline-flex;
  align-items: center;
  color: rgba(55, 53, 47, 0.6);
  font-weight: 500;
  font-size: 14px;
  height: 28px;
  border-radius: 3px;
  padding-left: 6px;
  padding-right: 8px;
  transition: background 20ms ease-in 0s;

  .check-count-icon {
    width: 14px;
    height: 14px;
    margin-right: 6px;
  }

  &:hover {
    cursor: pointer;
    background: rgba(55, 53, 47, 0.08);
  }
`;
