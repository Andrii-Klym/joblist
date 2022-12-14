import TimeFromDays from "../utils/TimeFromDays";
import LocationIcon from "../elementsUI/LocationIcon";
import RatingStars from "../elementsUI/RatingStars";
import RatingStarMobile from "../elementsUI/RatingStarMobile";
import Bookmark from "../elementsUI/Bookmark";
import { useNavigate } from "react-router-dom";

const JobPost = ({ jobPost, index }: any) => {
  const days: number = Math.floor(
    (Date.now() - new Date(jobPost["updatedAt"]).getTime()) / (1000 * 3600 * 24)
  );
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap flex-col w-full max-w-[1480px] px-[9px] sm:px-10">
      <div
        key={jobPost.id}
        className="relative flex justify-left bg-cardMobileColor items-center h-[206px] shadowCard rounded-[8px] px-[16px] py-[24px] my-2 flex-row md:h-[164px] md:bg-white"
      >
        <div className="flex justify-center pt-2 md:pt-0 space-x-[26px]">
          <img
            className="flex h-[66px] aspect-square rounded-full md:h-[85px]"
            src={`${jobPost.pictures[0]?.slice(0, -3)}?random=${index}`}
            alt='random'
          />
          <div className="flex flex-col space-y-0.5">
            <a
              onClick={() => {
                navigate(`/job-posts/${jobPost.id}`, {
                  state: { jobPost: jobPost },
                });
              }}
              className="text-mainColor cursor-pointer max-w-[612px] text-lg leading-[24px] md:text-xl md:max-w-[712px] md:font-bold"
            >
              {jobPost.title}
            </a>
            <p className="text-accentColor text-xs leading-[25px] font-normal">
              Department name • {jobPost.name}
            </p>
            <p className="flex justify-start space-x-[11px] flex-row text-accentColor text-xs leading-[25px] font-normal">
              <LocationIcon />
              <span>Vienna, Austria</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="absolute hidden top-2 right-[241px] md:block md:top-[73px] md:right-[186px]">
            <RatingStars />
          </div>
          <div className="absolute top-[11px] right-[241px] md:hidden">
            <RatingStarMobile />
          </div>
          <div className="hidden absolute top-[29.33px] right-[24px] lg:block">
            <Bookmark />
          </div>
          <div className="absolute bottom-[176px] right-[16px] md:right-4 md:bottom-6 text-accentColor text-xs leading-[25px] font-normal">
            {`Posted ${TimeFromDays(days)} ago`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
