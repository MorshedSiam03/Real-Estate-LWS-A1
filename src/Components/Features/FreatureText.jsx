import PropTypes from "prop-types";

function FreatureText({ title, description }) {
  return (
    <>
      <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
        {title}
        
      </h4>
      <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
        {description}
      </p>
    </>
  );
}

export default FreatureText;

FreatureText.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
