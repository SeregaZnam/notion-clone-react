import { useCallback, useEffect, useState } from "react";
import { ModalProps, PositionModel } from "../components/Modal";

const initialModalValue: Partial<ModalProps> = {
  title: "modal",
  isOpen: false,
  position: ["0px", "0px"],
};

export const useModal = (initialValue = initialModalValue) => {
  const [position, setPosition] = useState<PositionModel>(initialValue.position);
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpen);
  const title = initialValue.title;

  const openModal = ([x, y]: PositionModel) => {
    setPosition([x, y]);
    setIsOpenModal(true);
  };

  const closeModal = () => setIsOpenModal(false);

  const handleClick = useCallback(
    (event) => {
      if (isOpenModal) {
        const modalNode = document.querySelector(`[title="${title}"]`);

        if (!modalNode?.contains(event.target)) {
          setIsOpenModal(false);
        }
      }
    },
    [isOpenModal],
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });

  return { title, isOpenModal, openModal, closeModal, position };
};
