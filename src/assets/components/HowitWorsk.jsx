import HowitWorksCard from "./shared/HowitWorksCard";
import SectionHeder from "./shared/SectionHeder";

const HowitWorsk = () => {
  const steps = [
    {
      title: "Sign Up",
      description:
        "Create an account to access our study system and start your learning journey.",
    },
    {
      title: "Set Your Goals",
      description:
        "Define your academic objectives and create a plan to achieve them.",
    },
    {
      title: "Start Studying",
      description:
        "Begin your study sessions using the structured approach provided by StudyFlow.",
    },
    {
      title: "Sign Up",
      description:
        "Create an account to access our study system and start your learning journey.",
    },
    {
      title: "Set Your Goals",
      description:
        "Define your academic objectives and create a plan to achieve them.",
    },
    {
      title: "Start Studying",
      description:
        "Begin your study sessions using the structured approach provided by StudyFlow.",
    },
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <SectionHeder
        title="How It Works "
        description="Learn how StudyFlow can help you achieve your academic goals."
      />

      {
        <div className="py-10">
          <div className="grid grid-cols-3 gap-4 text-center ">
            {steps.map((el, index) => {
              return <HowitWorksCard key={index} stepss ={el} index={index} />;
            })}
          </div>
        </div>
      }
    </div>
  );
};

export default HowitWorsk;
