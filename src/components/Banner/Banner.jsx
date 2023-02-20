import { Component, useState } from "react";

import { IoCashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalAction,
  toggleModalAction,
} from "../../redux/modal/modal-slice";

import { Modal } from "../Modal";
import { Timer } from "../Timer/Timer";

import { BannerItem } from "./BannerItem";
import { BannerModal } from "./BannerModal";

const TEXT =
  "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.";

export const Banner = ({ test }) => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(test);
  const dispatch = useDispatch();
  const selectIsOpenModal = useSelector((state) => state.isOpenModal);

  const handleCloseModal = () => {
    dispatch(closeModalAction());
    // setIsOpenModal(false);
  };

  const handleToggleModal = () => {
    dispatch(toggleModalAction());
    // setIsOpenModal((prev) => !prev);
  };
  return (
    <>
      <div className="row mb-5 p-5 row-cols-2 bg-light">
        <BannerItem title="Featured title" text={TEXT}>
          <IoCashOutline />
        </BannerItem>
      </div>
      {selectIsOpenModal && (
        <Modal onCloseModal={handleToggleModal}>
          <Timer />
        </Modal>
      )}
    </>
  );
};
