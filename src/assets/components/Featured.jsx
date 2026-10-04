import SectionHeder from "./shared/SectionHeder";
import FeaturedCard from "./shared/FeaturedCard";
import { GoGoal } from "react-icons/go";
import { AiFillCheckCircle, AiFillChrome } from "react-icons/ai";
import { CgHeadset, CgRead } from "react-icons/cg";
import { BiBookAdd, BiBookBookmark } from "react-icons/bi";
import { BsOctagon } from "react-icons/bs";
import { TbAxe } from "react-icons/tb";

const Featured = () => {
  return (
    <div className="container mx-auto py-8 text-center">
      <SectionHeder
        title="Featured Content"
        description="Here's what makes our study system special."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-8">
        <FeaturedCard
        icon={<GoGoal className="mx-auto text-6xl text-[#0e7c66]" />}
        title="Goal Setting"
        description="Set clear, achievable goals for your studies and track your progress effectively."
      />
        <FeaturedCard
        icon={<AiFillCheckCircle className="mx-auto text-6xl text-[#0e7c66]" />}
        title="Achievement Tracking"
        description="Set clear, achievable goals for your studies and track your progress effectively."
      />
        <FeaturedCard
        icon={<BiBookBookmark className="mx-auto text-6xl text-[#0e7c66]" />}
        title="Resource Management"
        description="Organize and manage your study resources efficiently."
      />
        <FeaturedCard
        icon={<CgRead className="mx-auto text-6xl text-[#0e7c66]" />}
        title="Learning Resources"
        description="Access a wide range of learning materials and resources."
      />
        <FeaturedCard
        icon={<BsOctagon className="mx-auto text-6xl text-[#0e7c66]" />}
        title="Structured Learning"
        description="Follow a structured approach to your studies and maximize your learning efficiency."
      />
        <FeaturedCard
        icon={<TbAxe className="mx-auto text-6xl text-[#0e7c66]" />}
        title="Effective Study Techniques"
        description="Learn and apply proven study techniques to enhance your learning outcomes."
      />
      </div>
    </div>
  );
};

export default Featured;
