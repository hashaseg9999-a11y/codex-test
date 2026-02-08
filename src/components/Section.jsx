import React from "react";
import PropTypes from "prop-types";

const Section = ({ eyebrow, title, subtitle, children, className = "" }) =>
  React.createElement(
    "section",
    { className: `section ${className}`.trim() },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "section__header content" },
        eyebrow ? React.createElement("span", { className: "section__eyebrow" }, eyebrow) : null,
        title ? React.createElement("h2", { className: "section__title" }, title) : null,
        subtitle ? React.createElement("p", { className: "section__subtitle" }, subtitle) : null
      ),
      children
    )
  );

Section.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
