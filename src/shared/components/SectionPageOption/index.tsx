import { FC, MutableRefObject, useEffect, useState } from "react";
import { StyledAddIcon, StyledDragIndicatorIcon, StyledSectionPageOption } from "./Styles";

interface Props {
  refContainer: MutableRefObject<Element>;
}

export const SectionPageOption: FC<Props> = ({ refContainer }) => {
  const [visibleSectionPageOption, setVisibleSectionPageOption] = useState(false);

  useEffect(() => {
    const textSectionContainerInstance = refContainer.current;
    const setVisibleTextSection = () => setVisibleSectionPageOption(true);
    const setHiddenTextSection = () => setVisibleSectionPageOption(false);

    textSectionContainerInstance.addEventListener("mouseover", setVisibleTextSection);
    textSectionContainerInstance.addEventListener("mouseleave", setHiddenTextSection);
    textSectionContainerInstance.addEventListener("keydown", (event: KeyboardEvent) => {});

    return () => {
      textSectionContainerInstance.removeEventListener("mouseover", setVisibleTextSection);
      textSectionContainerInstance.removeEventListener("mouseleave", setHiddenTextSection);
    };
  }, [refContainer]);

  return (
    <StyledSectionPageOption style={{ opacity: visibleSectionPageOption ? 1 : 0 }}>
      <StyledAddIcon />
      <StyledDragIndicatorIcon />
    </StyledSectionPageOption>
  );
};
