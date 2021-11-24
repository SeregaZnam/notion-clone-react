import styled from "styled-components";

export const StyledEmptyPageContent = styled.section`
  display: flex;
  flex-direction: column;
  color: rgba(55, 53, 47, 0.4);

  .page-text {
    padding: 5px 2px 24px;
    line-height: 1.5;
  }

  .page-list-item {
    display: flex;
    align-items: center;
    height: 32px;
    border-radius: 3px;
    transition: all 20ms ease-in-out;

    span:first-child {
      margin-right: 10px;

      svg {
        font-size: 20px;
      }
    }

    .templatesColor {
      width: 20px;
      height: 100%;
      display: block;
      fill: rgba(55, 53, 47, 0.3);
      flex-shrink: 0;
      backface-visibility: hidden;
    }

    :hover {
      cursor: pointer;
      background: rgba(46, 170, 220, 0.15);
    }
  }
`;

export const StyledPageDatabase = styled.div`
  padding: 3px 2px;
  margin-top: 24px;

  .page-database-title {
    padding: 3px 2px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;
