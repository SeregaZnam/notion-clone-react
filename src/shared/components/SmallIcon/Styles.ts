import styled from "styled-components";

export const StylesIconContainer = styled.div`
  width: 20px;
  height: 20px;
`;

export const StyledPageIconImg = styled.img`
  display: ${(props) => (props.src || props.className ? "block" : "none")};

  margin-right: 10px;
  width: 14px;
  height: 14px;
`;

export const StyledPageIconDiv = styled.div`
  transform: scale(0.3);
  transform-origin: left top;
  width: 14px;
  height: 14px;
`;
