import { PropTypes } from "prop-types";

export const Modal = ({ children, title = "My modal", onCloseModal }) => {
  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onCloseModal();
    }
  };

  return (
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

              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCloseModal}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propType = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};