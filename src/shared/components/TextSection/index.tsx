import { memo, useEffect, useState } from "react";
import { SectionPageOption } from "../SectionPageOption";
import {
  StyledIcon,
  StyledTextContent,
  StyledTextSection,
  StyledTextSectionContainer,
} from "./Styles";

export const TextSection = memo(() => {
  const [visibleSectionPageOption, setVisibleSectionPageOption] = useState(false);

  useEffect(() => {
    const handle = () => setVisibleSectionPageOption(true);

    document.querySelector(".text-section-container").addEventListener("mouseover", handle);

    return () => {
      document.querySelector(".text-section-container").removeEventListener("mouseover", handle);
    };
  }, []);

  useEffect(() => {
    const handle = () => setVisibleSectionPageOption(false);

    document.querySelector(".text-section-container").addEventListener("mouseleave", handle);

    return () => {
      document.querySelector(".text-section-container").removeEventListener("mouseleave", handle);
    };
  }, []);

  return (
    <>
      <StyledTextSectionContainer className="text-section-container">
        <div className="page-option">
          <SectionPageOption visible={visibleSectionPageOption} />
        </div>

        <StyledTextSection>
          <StyledIcon src="https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f4e7.svg" />
          <StyledTextContent>
            The modern day reading list includes more than just books. We've created a dashboard to
            help you track books, articles, podcasts, and videos. Each media type has its own view
            based on the Type property.
          </StyledTextContent>
        </StyledTextSection>
      </StyledTextSectionContainer>
    </>
  );
});
