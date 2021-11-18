import styled from "styled-components";

export const StyledListItemOption = styled.li`
  display: flex;
  align-items: center;
  padding: 2px 14px;
  height: 23px;
  transition: all 0.1s;

  font-weight: 500;

  :hover {
    background-color: rgba(55, 53, 47, 0.08);
    cursor: pointer;
  }
`;

export const StyledItemIcon = styled.div`
  width: 24px;
  margin-right: 8px;
  transform: scale(0.7);
`;
