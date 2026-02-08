import React from "react";
import PropTypes from "prop-types";

const variantClassNames = {
  info: "callout--info",
  warning: "callout--warning",
  danger: "callout--danger",
  success: "callout--success",
};

const AlertBox = ({ title, variant = "info", children }) =>
  React.createElement(
    "div",
    { className: `callout ${variantClassNames[variant] || "callout--info"}` },
    title ? React.createElement("h4", { className: "callout__title" }, title) : null,
    React.createElement("div", { className: "callout__body" }, children)
  );

AlertBox.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["info", "warning", "danger", "success"]),
  children: PropTypes.node.isRequired,
};

export default AlertBox;
