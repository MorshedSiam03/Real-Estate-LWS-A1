import PropTypes from "prop-types";
import CircleDotSvg from "./CircleDotSvg";
import FacebookSvg from "./FacebookSvg";
import FillCircle from "./FillCircle";
import InstagramSvg from "./InstagramSvg";
import TwitterSvg from "./TwitterSvg";

export default function MemberCard({ name, role, image }) {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
        <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
          <img
            src={image}
            alt="team image"
            className="h-[120px] w-[120px] rounded-full"
          />
          <FillCircle />
          <CircleDotSvg />
        </div>
        <div className="text-center">
          <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
            {name}
          </h4>
          <p className="mb-5 text-sm text-body-color dark:text-dark-6">
            {role}
          </p>
          <div className="flex items-center justify-center gap-5">
            <FacebookSvg />
            <TwitterSvg />
            <InstagramSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
