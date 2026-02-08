import PropTypes from "prop-types";

const Section = ({ eyebrow, title, subtitle, children, className = "" }) => (
  <section className={`section ${className}`.trim()}>
    <div className="container">
      <div className="section__header content">
        {eyebrow ? <span className="section__eyebrow">{eyebrow}</span> : null}
        {title ? <h2 className="section__title">{title}</h2> : null}
        {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
      </div>
      {children}
    </div>
  </section>
);

Section.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
