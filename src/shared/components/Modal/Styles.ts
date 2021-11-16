import styled from "styled-components";

export const StyledMenu = styled.div<{ positionX: number; positionY: number } & any>`
  position: absolute;
  display: flex;
  background: white;
  border-radius: 3px;
  top: ${(props) => props.positionY || 0};
  left: ${(props) => props.positionX || 0};
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
`;
