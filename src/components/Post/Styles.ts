import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

export const StyledEditIcon = styled(EditIcon)`
  position: absolute;
  right: 20px;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

export const StyledDeleteIcon = styled(DeleteIcon)`
  position: absolute;
  right: 40px;
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

export const StyledSectionContent = styled.section`
  position: relative;
  min-height: 100px;
  padding: 16px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;
