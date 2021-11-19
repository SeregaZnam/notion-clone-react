import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export const StyledAddIcon = styled(AddIcon)``;
export const StyledDragIndicatorIcon = styled(DragIndicatorIcon)``;

export const StyledSectionPageOption = styled.div`
  color: rgba(55, 53, 47, 0.3);
  transition: background 200ms ease-in 0s;

  ${StyledAddIcon}:hover,
  ${StyledDragIndicatorIcon}:hover {
    cursor: grab;
    background: rgb(241, 241, 239);
    border-radius: 3px;
  }
`;
