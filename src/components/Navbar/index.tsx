import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { StyledAddIcon, StyledBottomNewPage, StyledNavbar, StyledUlList } from "./Styles";
import { ListItem } from "./ListItem";
import { NavbarButton } from "../NavbarButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAddPage } from "../../store/pageSliceThunks";
import SettingsIcon from "@mui/icons-material/Settings";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemOption } from "./ListItemOption";

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
        <ListItemOption text="Quick Find">
          <SearchIcon />
        </ListItemOption>
        <ListItemOption text="All Updates">
          <AccessTimeIcon />
        </ListItemOption>
        <ListItemOption text="Settings & Members">
          <SettingsIcon />
        </ListItemOption>
      </StyledUlList>

      <StyledUlList>
        {pages.map((page) => (
          <ListItem
            key={page.id}
            title={page.title}
            linkId={page.id}
            iconSrc={page.iconSrc}
            iconClass={page.iconClass}
            defaultTitle="Untitled"
          />
        ))}
        <NavbarButton handleClick={() => dispatch(fetchAddPage())} />
      </StyledUlList>

      <StyledBottomNewPage>
        <StyledAddIcon />
        <span>New page</span>
      </StyledBottomNewPage>
    </StyledNavbar>
  );
};
