import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PropTypes } from "prop-types";

export const Modal = ({ title, onCloseModal, children }) => {
  const countRef = useRef({ value: 0 });
  const [value, setValue] = useState(countRef.current.value);

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [onCloseModal]);

  const count = () => {
    countRef.current.value += 1;
  };
  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onCloseModal();
    }
  };
  const template = (
    <>
      <div className="modal-backdrop fade show" />

      <div
        onClick={handleBackdropClick}
        className="modal fade show"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button onClick={count}>plus</button>
              <button onClick={() => setValue(countRef.current.value)}>
                update
              </button>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseModal}
              />
            </div>
            <p>{countRef.current.value}</p>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
  return createPortal(template, document.getElementById("modal"));
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
