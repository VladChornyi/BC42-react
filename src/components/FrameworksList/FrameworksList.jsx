import React from "react";
import PropTypes from "prop-types";
import FrameworksItem from "../FrameworksItem/FrameworksItem";
import css from "./FrameworksList.module.scss";

function FrameworksList({ frameWorks }) {
  return (
    <>
      <ul className={css.list}>
        {frameWorks.map(({ id, name, difficult, learned }) => (
          <FrameworksItem
            key={id}
            name={name}
            difficult={difficult}
            learned={learned}
          />
        ))}
      </ul>
    </>
  );
}

FrameworksList.propTypes = {
  frameWorks: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      difficult: PropTypes.string.isRequired,
      learned: PropTypes.bool.isRequired,
    })
  ),
};

export default FrameworksList;
