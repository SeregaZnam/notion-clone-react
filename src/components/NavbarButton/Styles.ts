import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

export const StyledNavbarButton = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 14px;
  height: 22px;
  transition: all 0.1s ease-in-out;

  :hover {
    background-color: rgba(55, 53, 47, 0.08);
    cursor: pointer;
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  margin-right: 8px;
`;
