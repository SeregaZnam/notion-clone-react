import styled from "styled-components";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

export const StyledModalContainer = styled.div`
  width: 418px;
  height: 300px;
  font-size: 14px;
  line-height: 1.2;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";

  .menu-header {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    padding: 0 8px;

    &-list {
      display: flex;
      color: rgb(55, 53, 47);

      &-item {
        display: flex;
        align-items: center;
        padding: 0 8px;
        border-radius: 3px;
        height: 28px;

        :hover {
          cursor: pointer;
          background: rgba(55, 53, 47, 0.08);
        }

        :active {
          background: rgba(55, 53, 47, 0.16);
        }
      }
    }

    &-random {
      display: flex;
      align-items: center;
      color: rgba(55, 53, 47, 0.6);
      height: 28px;
      border-radius: 3px;
      padding: 0 8px 0 3px;

      &-text {
        margin-left: 3px;
      }

      :hover {
        cursor: pointer;
        background: rgba(55, 53, 47, 0.08);
      }

      :active {
        background: rgba(55, 53, 47, 0.16);
      }
    }
  }
`;

export const StyledSentimentSatisfiedAltIcon = styled(SentimentSatisfiedAltIcon)`
  transform: scale(0.7);
  color: rgba(55, 53, 47, 0.4);
`;

export const StyledContentMenu = styled.div`
  padding: 5px 15px;

  .icons-block-recent {
    margin-top: 5px;
    padding: 6px 0;

    &-icon {
      width: 32px;
      height: 32px;
      border-radius: 3px;

      :hover {
        cursor: pointer;
        background: rgba(55, 53, 47, 0.08);
      }

      :active {
        background: rgba(55, 53, 47, 0.16);
      }
    }

    &-area {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const StyledIconsBlockTitle = styled.h3`
  font-size: 11px;
  text-transform: uppercase;
  color: rgba(55, 53, 47, 0.6);
  font-weight: 500;
  margin-bottom: 10px;
`;

export const StyledFilterInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: rgba(242, 241, 238, 0.6);
  box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset;
  border-radius: 3px;
  border: none;
  padding: 5px 6px;
`;

export const StyledIcon = styled.div`
  transform: scale(0.3636);
  transform-origin: 6px 6px;
`;
