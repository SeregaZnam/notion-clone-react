import styled from "styled-components";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CalendarViewDayOutlinedIcon from "@mui/icons-material/CalendarViewDayOutlined";

export const StyledModalContainer = styled.div`
  min-width: 314px;
  padding-top: 6px;
  border-radius: 5px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
`;

export const StyledHeaderTitle = styled.h3`
  padding: 0 14px;
  margin-top: 6px;
  margin-bottom: 8px;
  text-transform: uppercase;
  color: rgba(55, 53, 47, 0.6);
  font-size: 11px;
  font-weight: 500;
`;

export const StylesListItem = styled.li`
  display: flex;
  padding: 4px 0;

  :hover {
    cursor: pointer;
    background: rgb(55, 53, 47, 0.08);
  }

  .content-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 8px;
    margin-right: 14px;

    h4 {
      font-size: 14px;
    }
  }

  .content-block-describe {
    color: rgba(55, 53, 47, 0.6);
    font-size: 12px;
  }
`;

export const StyledTextFieldsIcon = styled(TextFieldsIcon)`
  && {
    display: flex;
    width: 46px;
    height: 46px;
    box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px;
    border-radius: 3px;
    color: rgba(55, 53, 47, 0.6);
    margin-left: 14px;
  }
`;

export const StyledCalendarViewDayOutlinedIcon = styled(CalendarViewDayOutlinedIcon)`
  && {
    display: flex;
    width: 46px;
    height: 46px;
    box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px;
    border-radius: 3px;
    color: rgba(55, 53, 47, 0.6);
    margin-left: 14px;
  }
`;
