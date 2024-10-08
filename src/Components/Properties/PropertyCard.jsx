import PropTypes from "prop-types";
import BedSvg from "./BedSvg";
import BathSvg from "./BathSvg";

export default function PropertyCard({
  title,
  image,
  price,
  bedrooms,
  bathrooms,
}) {
  return (
    <div>
      <div className="p-4 bg-white rounded-lg border border-gray-600/10">
        <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-48 object-cover"
        />
        <div className="p-6">
          <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
          <div className="mt-2">
            <span className="text-xl font-extrabold text-blue-600">
              {price}
            </span>{" "}
            /M
          </div>
        </div>
        <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
          <div className="flex items-center">
            <BedSvg />
            <p>
              <span className="font-bold text-gray-900">{bedrooms}</span>{" "}
              Bedrooms
            </p>
          </div>
          <div className="flex items-center">
            <BathSvg />
            <p>
              <span className="font-bold text-gray-900">{bathrooms}</span>{" "}
              Bathrooms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
};
