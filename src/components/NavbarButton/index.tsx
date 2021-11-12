import React, { FC } from "react";
import { StyledAddIcon, StyledNavbarButton } from "./Styles";

interface Props {
  handleClick: () => void;
}

export const NavbarButton: FC<Props> = ({ handleClick }) => {
  return (
    <>
      <StyledNavbarButton onClick={handleClick}>
        <StyledAddIcon /> Add a page
      </StyledNavbarButton>
    </>
  );
};
