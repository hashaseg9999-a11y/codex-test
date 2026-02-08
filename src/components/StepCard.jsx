import PropTypes from "prop-types";

const StepCard = ({ step, title, meta, children }) => (
  <article className="card">
    <div className="card__header">
      <div className="step-badge" aria-hidden="true">
        {step}
      </div>
      <div>
        <h3 className="card__title">{title}</h3>
        {meta ? <p className="card__meta">{meta}</p> : null}
      </div>
    </div>
    <div className="card__body">{children}</div>
  </article>
);

StepCard.propTypes = {
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default StepCard;
