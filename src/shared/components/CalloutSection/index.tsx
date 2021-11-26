import React, { memo, useEffect, useRef, useState } from "react";
import { SectionPageOption } from "../SectionPageOption";
import {
  StyledIcon,
  StyledTextContent,
  StyledTextSection,
  StyledCalloutSectionContainer,
} from "./Styles";

export const CalloutSection = memo(() => {
  const textSectionContainerRef = useRef<HTMLDivElement>();
  return (
    <>
      <StyledCalloutSectionContainer ref={textSectionContainerRef}>
        <div className="page-option">
          <SectionPageOption refContainer={textSectionContainerRef} />
        </div>

        <StyledTextSection>
          <StyledIcon src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f4e7.svg" />
          <StyledTextContent>
            The modern day reading list includes more than just books. We've created a dashboard to
            help you track books, articles, podcasts, and videos. Each media type has its own view
            based on the Type property.
          </StyledTextContent>
        </StyledTextSection>
      </StyledCalloutSectionContainer>
    </>
  );
});
