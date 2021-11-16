import styled from "styled-components";

export const StyledComment = styled.div`
  
`;

export const StyledCommentDate = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: rgba(55, 53, 47, 0.4);
`;

export const StyledControlOptions = styled.div`
  display: flex;
  border-radius: 3px;
  height: 24px;

  .resolve-option {
    display: flex;
    align-items: center;
    border: 1px solid rgba(55, 53, 47, 0.16);
    color: rgba(55, 53, 47, 0.6);
    border-radius: 3px 0 0 3px;
    font-size: 12px;
    height: 24px;
    padding: 0 6px;
    margin-right: -1px;
    background: white;
    transition: background 20ms ease-in 0s;

    &:hover {
      cursor: pointer;
      background: rgb(225, 225, 225);
    }
    
    &:active {
      background: rgba(55, 53, 47, 0.16)
    }
  }

  .more-option-icon {
    border: 1px solid rgba(55, 53, 47, 0.16);
    border-radius: 0 3px 3px 0;
    height: 24px;
    color: rgba(55, 53, 47, 0.4);
    font-size: 20px;
    background: white;
    transition: background 20ms ease-in 0s;

    &:hover {
      cursor: pointer;
      background: rgb(225, 225, 225);
    }

    &:active {
      background: rgba(55, 53, 47, 0.16)
    }
  }
`;
