import HowitWorksCard from "./shared/HowitWorksCard";
import SectionHeder from "./shared/sectionHeder";

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
  ];

  return (
    <div className="container mx-auto mt-10 ">
      <SectionHeder title="How It Works " />
      {/* <div className="py-10">
        <div className="grid grid-cols-3 gap-4 text-center ">
        
          {steps.map((step, index) => {
            return (
              <HowitWorksCard key= {index} steps = {step} index = {index}/>
            
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default HowitWorsk;
