import React from "react";
import PropTypes from "prop-types";
import "./pills.scss";

const Pills = ({ local, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`pills__container ${
        selected ? "pills__container--active" : ""
      }`}
    >
      {local}
    </div>
  );
};

Pills.PropType = {
  local: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
};

export default Pills;
