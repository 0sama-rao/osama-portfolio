import { useState } from "react";
import { ViewAll } from "../projects/Projects";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

const Experiences = ({ experienceData, educationData, testonomialData }) => {
  const [show, setShow] = useState("Experience");
  const [viewAll, setViewAll] = useState(false);

  const [experiences] = useState([...experienceData].reverse());
  const [educations] = useState([...educationData].reverse());
  const [testonomials] = useState([...testonomialData].reverse());

  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {["Experience", "Education"].map((e, i) => (
          <button
            key={i}
            onClick={() => {
                setShow(e);
                setViewAll(!viewAll);
              }}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === e
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-300 hover:dark:bg-grey-9200 text-black dark:text-red"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Experience"
                ? experiences
                : show === "Education"
                ? educations
                : testonomials
              ).map((e, i) => (
                // @ts-ignore
                <ExperienceCard key={i} {...e} index={i} />
              ))
            : (show === "Experience"
                ? experiences
                : show === "Education"
                ? educations
                : testonomials
              )
                .slice(0, 1)
                .map((e, i) => (
                  // @ts-ignore
                  <ExperienceCard key={i} {...e} index={i} />
                ))}
        </div>
      </div>

      {(show === "Experience"
        ? experiences
        : show === "Education"
        ? educations
        : testonomials
      ).length > 1 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Experiences;
