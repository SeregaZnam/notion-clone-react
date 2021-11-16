import styled from "styled-components";

export const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTopMenu = styled.div`
  display: flex;
  height: 45px;
  width: 100%;
  padding: 0 10px 0 12px;
  box-sizing: border-box;
`;

export const StyledBoxIcons = styled.div`
  padding: 80px 0 4px 1px;
  transition: all 1s ease-in-out;
`;

export const StyledPageIcon = styled.img`
  width: 78px;
  height: 78px;
`;

export const StyledControlsBlock = styled.div`
  display: flex;
  opacity: 0;
  margin: 8px 0 4px -1px;
  transition: all 0.1s ease-in-out;

  ${StyledBoxIcons}:hover & {
    opacity: 1;
  }

  .icon-control {
    font-size: 14px;
    color: rgba(55, 53, 47, 0.4);

    & svg {
      position: relative;
      top: 1px;
      font-size: 14px;
    }

    :hover {
      cursor: pointer;
      background-color: rgba(55, 53, 47, 0.08);
      border-radius: 5px;
    }
  }
`;

export const StyledHorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(55, 53, 47, 0.09);
  margin-bottom: 8px;
`;

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
