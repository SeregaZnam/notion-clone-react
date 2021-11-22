import React, { FC } from "react";
import MoodIcon from "@mui/icons-material/Mood";
import { StyledIconControl } from "./Styles";

interface Props {
  text: string;
  className?: string;
  onHandleClick?: () => void;
}

export const IconControl: FC<Props> = ({ text, className = "", onHandleClick, children }) => {
  return (
    <StyledIconControl className={className} onClick={onHandleClick}>
      <span className="control-content">
        {children}
        <span className="control-text">{text}</span>
      </span>
    </StyledIconControl>
  );
};
