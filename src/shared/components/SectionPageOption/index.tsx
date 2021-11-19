import { FC } from "react";
import { StyledAddIcon, StyledDragIndicatorIcon, StyledSectionPageOption } from "./Styles";

export const SectionPageOption: FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <StyledSectionPageOption style={{ opacity: visible ? 1: 0 }}>
      <StyledAddIcon />
      <StyledDragIndicatorIcon />
    </StyledSectionPageOption>
  );
};
