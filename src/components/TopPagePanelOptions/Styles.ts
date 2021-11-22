import styled from "styled-components";

export const StyledTopPagePanelOptions = styled.div`
  display: flex;
  padding: 0 10px 0 18px;
  box-sizing: border-box;

  .options-container {
    display: flex;
    width: 100%;
    height: 45px;
    justify-content: space-between;
    align-items: center;
  }

  .options-side {
    display: flex;
    height: 24px;
    align-items: center;
    font-size: 14px;
    padding: 0 6px;

    &:first-child:hover {
      cursor: pointer;
      background-color: rgba(55, 53, 47, 0.08);
      border-radius: 5px;
    }

    .options-left-side-text {
      margin-left: 5px;
    }
  }
`;
