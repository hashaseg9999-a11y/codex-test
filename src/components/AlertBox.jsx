import PropTypes from "prop-types";

const variantClassNames = {
  info: "callout--info",
  warning: "callout--warning",
  danger: "callout--danger",
  success: "callout--success",
};

const AlertBox = ({ title, variant = "info", children }) => (
  <div className={`callout ${variantClassNames[variant] || "callout--info"}`}>
    {title ? <h4 className="callout__title">{title}</h4> : null}
    <div className="callout__body">{children}</div>
  </div>
);

AlertBox.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["info", "warning", "danger", "success"]),
  children: PropTypes.node.isRequired,
};

export default AlertBox;
