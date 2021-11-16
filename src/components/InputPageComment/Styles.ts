import styled from "styled-components";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CancelIcon from "@mui/icons-material/Cancel";

export const StyledForm = styled.form`
  position: relative;
`;

export const StyledInputComment = styled.input`
  border: none;
  outline: none;
  padding: 6px 4px 12px;
  width: 100%;
  background: transparent;
`;

export const StyledAttachFileIcon = styled(AttachFileIcon)<any>`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 20px !important;
  color: rgba(55, 53, 47, 0.4);
  padding: 2px;

  & path {
    transform: rotate(45deg) translate(5px, -12px);
  }

  :hover {
    cursor: pointer;
    background-color: rgba(55, 53, 47, 0.08);
    border-radius: 5px;
  }

  :active {
    background-color: rgba(55, 53, 47, 0.2);
  }
`;

export const StyledImagePreview = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledImagePreload = styled.div<{ imageSrc: string }>`
  position: relative;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  margin-top: 10px;
  background-image: ${(props) => props.imageSrc};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  transition: all 100ms;

  :hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;

export const StyledCancelIcon = styled(CancelIcon)`
  position: absolute;
  top: 3px;
  right: -12px;
  opacity: 0.7;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;
