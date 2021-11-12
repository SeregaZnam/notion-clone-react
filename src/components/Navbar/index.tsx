import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams, useLocation, useRouteMatch } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { StyledNavbar, StyledUlList } from "./Styles";
import { ListItem } from "../ListItem";
import { NavbarButton } from "../NavbarButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addPage } from "../../store/pagesSlice";

export const Navbar = () => {
  const pages = useAppSelector((state) => state.pages.pages);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const createNewPage = () => {
    dispatch(addPage());
  };

  useEffect(() => {
    if (pages.length !== 0) {
      const createdPage = pages[pages.length - 1];

      history.push({
        pathname: createdPage.id,
      });
    }
  }, [pages]);

  return (
    <StyledNavbar>
      <StyledUlList>
        {pages.map((page) => (
          <ListItem key={page.id} title={page.title} linkId={page.id} defaultTitle="Untitled" />
        ))}
        <NavbarButton handleClick={createNewPage} />
      </StyledUlList>
    </StyledNavbar>
  );
};
