import React, { createContext, FC, useContext, useEffect, useRef, useState } from "react";
import { StyledTextSection, StyledTextSectionContainer } from "./Styles";
import { SectionPageOption } from "../SectionPageOption";
import { useAppDispatch } from "../../../store/hooks";
import {
  fetchAddTextBlock,
  fetchChangeTextBlock,
  fetchRemoveTextBlock,
} from "../../../store/text-block/textBlockThunks";
import { PageIdContext } from "../../../components/Page";

interface Prop {
  text: string;
  order: number;
  textSectionId: string;
}

export const NextOrder = createContext(0);
export const TextBlockIdContext = createContext("");

export const TextSection: FC<Prop> = ({ text, order, textSectionId }) => {
  const pageId = useContext(PageIdContext);
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
      event.preventDefault();
      dispatch(fetchAddTextBlock({ pageId, text: "", order: order + 1 }));
    }
  };

  useEffect(() => {
    const textSectionInstance = textSectionRef.current;
    const handle = (event) =>
      dispatch(
        fetchChangeTextBlock({
          text: event.target.textContent,
          pageId: pageId,
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
          <TextBlockIdContext.Provider value={textSectionId}>
            <SectionPageOption refContainer={textSectionContainerRef} nextOrder={order + 1} />
          </TextBlockIdContext.Provider>
        </div>

        <StyledTextSection
          ref={textSectionRef}
          contentEditable="true"
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
