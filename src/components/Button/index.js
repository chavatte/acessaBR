import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./button.scss";
function Button({ children, onClick, width, to, target }) {
  const buttonContent = <>{children}</>;

  return (
    <button className="button" onClick={onClick} style={{ width }}>
      {to ? (
        <Link to={to} target={target} rel="noopener noreferrer">
          {buttonContent}
        </Link>
      ) : (
        buttonContent
      )}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  width: PropTypes.number.isRequired,
  to: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
