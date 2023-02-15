import { MODAL_CLOSE, MODAL_OPEN, MODAL_TOGGLE } from "./modal-types";

export const openModalAction = () => ({ type: MODAL_OPEN });
export const closeModalAction = () => ({ type: MODAL_CLOSE });
export const toggleModalAction = () => ({ type: MODAL_TOGGLE });
