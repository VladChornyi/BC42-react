import { Component } from "react";
import { createPortal } from "react-dom";
import { PropTypes } from "prop-types";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscClose);
  }

  componentDidUpdate() {
    console.log("Did update");
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (e) => {
    if (e.code === "Escape") {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { title, onCloseModal, children } = this.props;
    const template = (
      <>
        <div className="modal-backdrop fade show" />

        <div
          onClick={this.handleBackdropClick}
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
    return createPortal(template, document.getElementById("modal"));
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
