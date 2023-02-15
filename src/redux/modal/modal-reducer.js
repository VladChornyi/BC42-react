import { MODAL_CLOSE, MODAL_OPEN, MODAL_TOGGLE } from "./modal-types";

export const modalReducer = (state = false, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return true;
    case MODAL_CLOSE:
      return false;
    case MODAL_TOGGLE:
      return !state;
    default:
      return state;
  }
};
