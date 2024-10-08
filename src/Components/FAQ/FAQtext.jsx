import PropTypes from "prop-types";

function FAQtext({ title, description }) {
  return (
    <>
      <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="text-base text-body-color dark:text-dark-6">
        {description}
      </p>
    </>
  );
}

export default FAQtext;

FAQtext.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
