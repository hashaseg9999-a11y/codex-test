import React from "react";
import PropTypes from "prop-types";

const StepCard = ({ step, title, meta, children }) =>
  React.createElement(
    "article",
    { className: "card" },
    React.createElement(
      "div",
      { className: "card__header" },
      React.createElement("div", { className: "step-badge", "aria-hidden": "true" }, step),
      React.createElement(
        "div",
        null,
        React.createElement("h3", { className: "card__title" }, title),
        meta ? React.createElement("p", { className: "card__meta" }, meta) : null
      )
    ),
    React.createElement("div", { className: "card__body" }, children)
  );

StepCard.propTypes = {
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default StepCard;
