import styled from "styled-components";

export const StyledContextMenu = styled.div<{ positionX: number; positionY: number } & any>`
  position: absolute;
  display: flex;
  width: 100px;
  height: 100px;
  background: red;
  top: ${(props) => props.positionY || 0};
  left: ${(props) => props.positionX || 0};
`;
