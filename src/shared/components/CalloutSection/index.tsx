import React, { createContext, FC, memo, useContext, useEffect, useRef, useState } from "react";
import { SectionPageOption } from "../SectionPageOption";
import {
  StyledIcon,
  StyledTextContent,
  StyledTextSection,
  StyledCalloutSectionContainer,
} from "./Styles";
import { SmallIcon } from "../SmallIcon";
import { fetchAddTextBlock, fetchRemoveTextBlock } from "../../../store/text-block/textBlockThunks";
import { useAppDispatch } from "../../../store/hooks";
import { PageIdContext } from "../../../components/Page";
import { fetchCallouts, fetchRemoveCallout } from "../../../store/callout/calloutSliceThunks";

interface Props {
  calloutId: string;
  imageClass: string;
  text: string;
}

export const CalloutIdContext = createContext("");

export const CalloutSection: FC<Props> = memo(({ calloutId, text, imageClass }) => {
  const textSectionContainerRef = useRef<HTMLDivElement>();
  const dispatch = useAppDispatch();
  const pageId = useContext(PageIdContext);

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

  return (
    <>
      <StyledCalloutSectionContainer ref={textSectionContainerRef}>
        <div className="page-option">
          <SectionPageOption refContainer={textSectionContainerRef} />
        </div>

        <CalloutIdContext.Provider value={calloutId}>
          <StyledTextSection>
            <SmallIcon iconClass={imageClass} />
            <StyledTextContent
              contentEditable="true"
              suppressContentEditableWarning={true}
              onKeyDownCapture={handleKeyPress}
              placeholder="Type something..."
            >
              {text}
            </StyledTextContent>
          </StyledTextSection>
        </CalloutIdContext.Provider>
      </StyledCalloutSectionContainer>
    </>
  );
});
