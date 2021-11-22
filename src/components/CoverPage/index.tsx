import React, { FC } from "react";
import { StyledImage } from "./Styles";

export const CoverPage: FC<{ imageSrc: string }> = ({ imageSrc }) => {
  if (!imageSrc) {
    return null;
  }

  return <StyledImage src={imageSrc} alt="" />;
};
