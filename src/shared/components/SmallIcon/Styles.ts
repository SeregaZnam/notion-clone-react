import styled from "styled-components";

export const StylesIconContainer = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;

  :hover {
    cursor: pointer;
    background: rgba(55, 53, 47, 0.08);
  }
`;

export const StyledPageIconImg = styled.img`
  display: ${(props) => (props.src || props.className ? "block" : "none")};

  margin-right: 10px;
  width: 14px;
  height: 14px;
`;

export const StyledPageIconDiv = styled.div`
  transform: scale(0.22);
  transform-origin: 4px 4px;
  width: 14px;
  height: 14px;
`;
