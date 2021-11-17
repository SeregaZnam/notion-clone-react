import React from "react";
import { StyledIcon, StyledTextContent, StyledTextSection } from "./Styles";

export const TextSection = () => {
  return (
    <>
      <StyledTextSection>
        <StyledIcon src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f4e7.svg" />
        <StyledTextContent>
          The modern day reading list includes more than just books. We've created a dashboard to
          help you track books, articles, podcasts, and videos. Each media type has its own view
          based on the Type property.
        </StyledTextContent>
      </StyledTextSection>
    </>
  );
};
