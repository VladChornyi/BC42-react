import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { openModalAction } from "../../redux/modal/modal-slice";

export const BannerItem = ({ title, text, children }) => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModalAction());
  };

  return (
    <div className="feature col">
      <div
        className="d-flex rounded justify-content-center align-items-center mb-4 text-white bg-primary bg-gradient"
        style={{ width: "70px", height: "70px", fontSize: "30px" }}
      >
        {children}
      </div>

      <div className="my-5 me-5">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleOpenModal}
      >
        Open modal
      </button>
    </div>
  );
};

BannerItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
