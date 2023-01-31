import React from "react";
import PropTypes from "prop-types";
import css from "./FrameworksItem.module.css";

function FrameworksItem({ name, difficult, learned }) {
  return (
    <li className={learned ? css.learned : css.item}>
      <h3>{name}</h3>
      <p>{difficult}</p>
    </li>
  );
}

FrameworksItem.propTypes = {
  name: PropTypes.string.isRequired,
  difficult: PropTypes.string.isRequired,
  learned: PropTypes.bool.isRequired,
};

export default FrameworksItem;
