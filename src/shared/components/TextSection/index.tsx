import React, { FC, useEffect, useRef, useState } from "react";
import { StyledTextSection, StyledTextSectionContainer } from "./Styles";
import { SectionPageOption } from "../SectionPageOption";
import { useAppDispatch } from "../../../store/hooks";
import {
  fetchAddTextBlock,
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
  const dispatch = useAppDispatch();
  const textSectionContainerRef = useRef<HTMLDivElement>();
  const textSectionRef = useRef<HTMLDivElement>();

  const handleKeyPress = (event) => {
    const targetElement = event.target;
    const isPressedBackspace = event.code === "Backspace" || event.keyCode === 8;
    const isPressedEnter = event.code === "Enter" || event.keyCode === 13;

    if (targetElement.innerText === "" && isPressedBackspace) {
      dispatch(fetchRemoveTextBlock({ id: textSectionId }));
      return;
    }

    if (isPressedEnter) {
      dispatch(fetchAddTextBlock({ pageId, text: "", order: 0 }));
      return;
    }
  };

  useEffect(() => {
    const textSectionInstance = textSectionRef.current;
    const handle = (event) =>
      dispatch(
        fetchChangeTextBlock({
          text: event.target.textContent,
          pageId: pageId,
          order: order,
          id: textSectionId,
        }),
      );
    textSectionInstance.addEventListener("input", handle);

    return () => textSectionInstance.removeEventListener("input", handle);
  }, []);

  useEffect(() => {
    if (text === "") {
      textSectionRef.current.focus();
    }
  }, []);

  return (
    <>
      <StyledTextSectionContainer ref={textSectionContainerRef}>
        <div className="page-option">
          <SectionPageOption refContainer={textSectionContainerRef} />
        </div>

        <StyledTextSection
          ref={textSectionRef}
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
