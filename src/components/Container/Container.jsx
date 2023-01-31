import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Container.css";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const imageUrl = "../Button";

const styles = {
  color: getRandomColor(),
  fontSize: "25px",
  backgroundImage: `url(${imageUrl})`,
};

export const Container = ({ title, children, array, frameWorks }) => {
  return (
    <div className="container">
      {title && <h2 style={styles}>{title}</h2>}
      {children}
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  array: PropTypes.arrayOf(PropTypes.string),
  frameWorks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      difficult: PropTypes.string.isRequired,
    })
  ),
};
