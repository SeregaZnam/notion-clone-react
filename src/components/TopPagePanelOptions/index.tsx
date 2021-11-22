import React, { FC } from "react";
import { Box } from "@mui/material";
import { SmallIcon } from "../../shared/components/SmallIcon";
import { PageModel } from "../../types/Page.model";
import { StyledTopPagePanelOptions } from "./Styles";

export const TopPagePanelOptions: FC<Pick<PageModel, "title" | "iconSrc" | "iconClass">> = ({
  title,
  iconSrc,
  iconClass,
}) => {
  return (
    <>
      <StyledTopPagePanelOptions>
        <div className="options-container">
          <div className="options-side">
            <SmallIcon iconSrc={iconSrc} iconClass={iconClass} />
            <span className="options-left-side-text">{title}</span>
          </div>
          <div className="options-side">Share</div>
        </div>
      </StyledTopPagePanelOptions>
    </>
  );
};
