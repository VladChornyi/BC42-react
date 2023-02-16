import { createAction } from "@reduxjs/toolkit";
import { MODAL_CLOSE, MODAL_OPEN, MODAL_TOGGLE } from "./modal-types";

// export const openModalAction = () => ({ type: MODAL_OPEN });
// export const closeModalAction = () => ({ type: MODAL_CLOSE });
// export const toggleModalAction = (payload) => ({ type: MODAL_TOGGLE, payload });

export const openModalAction = createAction(MODAL_OPEN);
export const closeModalAction = createAction(MODAL_CLOSE);
export const toggleModalAction = createAction(MODAL_TOGGLE);
