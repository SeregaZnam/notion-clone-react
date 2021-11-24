import React, { FC, useEffect, useState } from "react";
import { StyledTextSection, StyledTextSectionContainer } from "./Styles";
import { SectionPageOption } from "../SectionPageOption";
import { useAppDispatch } from "../../../store/hooks";
import { fetchChangeTextBlock } from "../../../store/text-block/textBlockThunks";

export const TextSection: FC<{
  pageId: string;
  text: string;
  order: number;
  textSectionId: string;
}> = ({ pageId, text, order, textSectionId }) => {
  const [visibleSectionPageOption, setVisibleSectionPageOption] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const textSectionElement = document.querySelector(".text-section-container");
    const setVisibleTextSection = () => setVisibleSectionPageOption(true);
    const setHiddenTextSection = () => setVisibleSectionPageOption(false);

    textSectionElement.addEventListener("mouseover", setVisibleTextSection);
    textSectionElement.addEventListener("mouseleave", setHiddenTextSection);

    return () => {
      textSectionElement.removeEventListener("mouseover", setVisibleTextSection);
      textSectionElement.removeEventListener("mouseleave", setHiddenTextSection);
    };
  }, []);

  useEffect(() => {
    const handle = (event) => {
      dispatch(
        fetchChangeTextBlock({
          text: event.target.textContent,
          pageId: pageId,
          order: order,
          id: textSectionId,
        }),
      );
    };
    const elem = document.querySelector(".test");

    elem.addEventListener("input", handle);

    return () => {
      elem.removeEventListener("input", handle);
    };
  });

  return (
    <>
      <StyledTextSectionContainer className="text-section-container">
        <div className="page-option">
          <SectionPageOption visible={visibleSectionPageOption} />
        </div>

        <StyledTextSection
          className="test"
          contentEditable={true}
          placeholder="Type '/' for commands"
        >
          {text}
        </StyledTextSection>
      </StyledTextSectionContainer>
    </>
  );
};
