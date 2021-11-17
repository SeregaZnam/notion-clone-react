import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StyledNavbar, StyledUlList } from "./Styles";
import { ListItem } from "../ListItem";
import { NavbarButton } from "../NavbarButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAddPage } from "../../store/pageSliceThunks";

export const Navbar = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const pages = useAppSelector((state) => state.pages.pages);
  const currentPage = pages.find((page) => page.id === history.location.pathname);

  useEffect(() => {
    if (pages.length !== 0 && !!currentPage) {
      const createdPage = pages[0];

      history.push({
        pathname: createdPage.id,
      });
    }
  }, [pages]);

  return (
    <StyledNavbar>
      <StyledUlList>
        {pages.map((page) => (
          <ListItem
            key={page.id}
            title={page.title}
            linkId={page.id}
            srcIcon={page.srcIcon}
            defaultTitle="Untitled"
          />
        ))}
        <NavbarButton handleClick={() => dispatch(fetchAddPage())} />
      </StyledUlList>
    </StyledNavbar>
  );
};
