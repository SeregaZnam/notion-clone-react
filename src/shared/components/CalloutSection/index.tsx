import React, { createContext, FC, memo, useContext, useEffect, useRef, useState } from "react";
import { SectionPageOption } from "../SectionPageOption";
import { StyledTextContent, StyledTextSection, StyledCalloutSectionContainer } from "./Styles";
import { SmallIcon } from "../SmallIcon";
import { fetchAddTextBlock } from "../../../store/text-block/textBlockThunks";
import { useAppDispatch } from "../../../store/hooks";
import { PageIdContext } from "../../../components/Page";
import { fetchChangeCallout, fetchRemoveCallout } from "../../../store/callout/calloutSliceThunks";

interface Props {
  calloutId: string;
  imageClass: string;
  text: string;
  nextOrder: number;
}

export const CalloutIdContext = createContext("");

export const CalloutSection: FC<Props> = memo(({ calloutId, text, imageClass, nextOrder }) => {
  const [textValue] = useState(text);
  const textSectionContainerRef = useRef<HTMLDivElement>();
  const dispatch = useAppDispatch();
  const pageId = useContext(PageIdContext);
  const calloutSectionRef = useRef<HTMLDivElement>();

  const handleKeyPress = (event) => {
    const targetElement = event.target;
    const isPressedBackspace = event.code === "Backspace" || event.keyCode === 8;
    const isPressedEnter = event.code === "Enter" || event.keyCode === 13;

    if (targetElement.innerText === "" && isPressedBackspace) {
      dispatch(fetchRemoveCallout({ id: calloutId }));
      return;
    }

    if (isPressedEnter) {
      dispatch(fetchAddTextBlock({ pageId, text: "", order: 0 }));
    }
  };

  useEffect(() => {
    const calloutSectionInstance = calloutSectionRef.current;
    const handle = (event) =>
      dispatch(
        fetchChangeCallout({
          id: calloutId,
          text: event.target.textContent,
          order: 0,
        }),
      );
    calloutSectionInstance.addEventListener("input", handle);

    return () => calloutSectionInstance.removeEventListener("input", handle);
  }, []);

  useEffect(() => {
    if (text === "") {
      calloutSectionRef.current.focus();
    }
  }, []);

  return (
    <>
      <StyledCalloutSectionContainer ref={textSectionContainerRef}>
        <div className="page-option">

          <SectionPageOption refContainer={textSectionContainerRef} nextOrder={nextOrder} />

        </div>

        <CalloutIdContext.Provider value={calloutId}>
          <StyledTextSection>
            <SmallIcon iconClass={imageClass} />
            <StyledTextContent
              ref={calloutSectionRef}
              contentEditable="true"
              suppressContentEditableWarning={true}
              onKeyDownCapture={handleKeyPress}
              placeholder="Type something..."
            >
              {textValue}
            </StyledTextContent>
          </StyledTextSection>
        </CalloutIdContext.Provider>
      </StyledCalloutSectionContainer>
    </>
  );
});
