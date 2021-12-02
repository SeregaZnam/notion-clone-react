import { FC, MutableRefObject, useEffect, useState } from "react";
import { StyledAddIcon, StyledDragIndicatorIcon, StyledSectionPageOption } from "./Styles";
import { ModalAddBlock } from "../../../components/ModalAddBlock";
import { useModal } from "../../../hooks/useModal";

interface Props {
  refContainer: MutableRefObject<Element>;
  nextOrder: number;
}

export const SectionPageOption: FC<Props> = ({ refContainer, nextOrder }) => {
  const [visibleSectionPageOption, setVisibleSectionPageOption] = useState(false);
  const { title, position, isOpenModal, openModal, closeModal } = useModal({
    title: "addBlock",
  });

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
    <>
      <StyledSectionPageOption style={{ opacity: visibleSectionPageOption ? 1 : 0 }}>
        <StyledAddIcon onClick={(event) => openModal([`${event.pageX}px`, `${event.pageY}px`])} />
        <StyledDragIndicatorIcon />
      </StyledSectionPageOption>

      <ModalAddBlock
        nextOrder={nextOrder}
        title={title}
        isOpenModal={isOpenModal}
        position={position}
        closeModal={closeModal}
      />
    </>
  );
};
