import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: rgb(247, 246, 243);
  min-width: 240px;
  height: 100%;
`;

export const StyledUlList = styled.ul`
  list-style: none;
  margin: 0;
  padding-top: 14px;
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(25, 23, 17, 0.6);
`;

export const StyledBottomNewPage = styled.div`
  padding: 2px 14px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(55, 53, 47, 0.08);
  margin-top: auto;
  color: rgba(25, 23, 17, 0.6);
  font-weight: 500;
  font-size: 14px;
  height: 45px;

  :hover {
    cursor: pointer;
    background: rgba(55, 53, 47, 0.08);
  }
`;

export const StyledAddIcon = styled(AddIcon)`
  position: relative;
  top: 1px;
  margin-right: 8px;
`;
