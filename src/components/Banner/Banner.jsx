import { Component, useState } from "react";

import { IoCashOutline } from "react-icons/io5";

import { Modal } from "../Modal";
import { Timer } from "../Timer/Timer";

import { BannerItem } from "./BannerItem";
import { BannerModal } from "./BannerModal";

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export const Banner = ({ test }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(test);

  const handleOpenModal = () => {
    setIsOpenModal(true);
    setCounter((prev) => prev + 1);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleToggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <>
      <div className="row mb-5 p-5 row-cols-2 bg-light">
        <BannerItem
          title="Featured title"
          text={TEXT}
          onOpenModal={handleOpenModal}
        >
          <IoCashOutline />
        </BannerItem>
      </div>
      {isOpenModal && (
        <Modal onCloseModal={handleToggleModal}>
          <Timer />
        </Modal>
      )}
    </>
  );
};
