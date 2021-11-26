import React, { FC, useEffect, useRef, useState } from "react";
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
  const [textValue] = useState(text);
  const [visibleSectionPageOption, setVisibleSectionPageOption] = useState(false);
  const dispatch = useAppDispatch();
  const textSectionRef = useRef<HTMLDivElement>();

  const handleKeyPress = (event) => {
    const targetElement = event.target;
    const isPressedBackspace = event.code === "Backspace" || event.keyCode === 8;

    if (targetElement.innerText === "" && isPressedBackspace) {
      dispatch(fetchRemoveTextBlock({ id: textSectionId }));
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
    const handle = (event) =>
      dispatch(
        fetchChangeTextBlock({
          text: event.target.textContent,
          pageId: pageId,
          order: order,
          id: textSectionId,
        }),
      );
    const elem = document.querySelector(".test");

    elem.addEventListener("input", handle);

    return () => {
      elem.removeEventListener("input", handle);
    };
  }, []);

  useEffect(() => {
    if (text === "") {
      textSectionRef.current.focus();
    }
  }, []);

  return (
    <>
      <StyledTextSectionContainer className="text-section-container">
        <div className="page-option">
          <SectionPageOption visible={visibleSectionPageOption} />
        </div>

        <StyledTextSection
          className="test"
          contentEditable={true}
          ref={textSectionRef}
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
