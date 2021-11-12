import styled from 'styled-components';

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
`;

export const StyledBoxIcons = styled.div`
  display: flex;
  padding: 80px 0 4px 1px;
  transition: all 1s ease-in-out;
`;

export const StyledControlsBlock = styled.div`
  display: flex;
  opacity: 0;
  transition: all 0.1s ease-in-out;

  ${StyledBoxIcons}:hover & {
    opacity: 1;
  }

  .icon-control {
    font-size: 14px;
    color: rgba(55, 53, 47, 0.4);

    & svg {
      font-size: 14px;
    }

    :hover {
      cursor: pointer;
      background-color: rgba(55, 53, 47, 0.08);
      border-radius: 5px;
    }
  }
`;
