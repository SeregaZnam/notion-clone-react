import React, { FC, useEffect, useState } from "react";
import { StyledTextSection, StyledTextSectionContainer } from "./Styles";
import { SectionPageOption } from "../SectionPageOption";
import { useAppDispatch } from "../../../store/hooks";
import {
  fetchChangeTextBlock,
  fetchRemoveTextBlock,
} from "../../../store/text-block/textBlockThunks";

export const TextSection: FC<{
  pageId: string;
  text: string;
  order: number;
  textSectionId: string;
}> = ({ pageId, text, order, textSectionId }) => {
  const [textValue, setTextValue] = useState(text);
  const [visibleSectionPageOption, setVisibleSectionPageOption] = useState(false);
  const [textBlockValue, setTextBlockValue] = useState("");
  const dispatch = useAppDispatch();

  const handleKeyPress = (event) => {
    const targetElement = event.target;

    if (targetElement.innerText === textBlockValue) {
      dispatch(fetchRemoveTextBlock({ id: textSectionId }));
      return;
    }

    if (event.code === "Backspace" || event.keyCode === 8) {
      setTextBlockValue(targetElement.innerText);
    }
  };

  useEffect(() => {
    const textSectionElement = document.querySelector(".text-section-container");
    const setVisibleTextSection = () => setVisibleSectionPageOption(true);
    const setHiddenTextSection = () => setVisibleSectionPageOption(false);

    textSectionElement.addEventListener("mouseover", setVisibleTextSection);
    textSectionElement.addEventListener("mouseleave", setHiddenTextSection);
    textSectionElement.addEventListener("keydown", (event: KeyboardEvent) => {});

    return () => {
      textSectionElement.removeEventListener("mouseover", setVisibleTextSection);
      textSectionElement.removeEventListener("mouseleave", setHiddenTextSection);
    };
  }, []);

  useEffect(() => {
    const handle = (event) => {
      console.log(event.target.textContent);
      setTextValue(event.target.textContent);

      dispatch(
        fetchChangeTextBlock({
          text: textValue,
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
          suppressContentEditableWarning={true}
          onKeyDownCapture={handleKeyPress}
          placeholder="Type '/' for commands"
        >
          {textValue}
        </StyledTextSection>
      </StyledTextSectionContainer>
    </>
  );
};
