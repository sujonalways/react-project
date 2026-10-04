import { BsStars } from "react-icons/bs";

const AiDaylearning = () => {
  return (
    <section className="container mx-auto mt-10">
      <div className=" mx-50 rounded-3xl bg-[#14231f] grid grid-cols-2 items-center gap-4">
        {/* box 1 */}
        <div className=" text-white p-6">
          <div className="flex text-yellow-400 gap-1 mb-1">
            <BsStars />
            <h3 className="text-[15px]  font-bold mb-4">AI Day Planning </h3>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Optimize Your Learning Schedule
          </h2>
          <p className="text-[15px]">
            Discover how our AI-powered learning platform can enhance your
            educational experience.
          </p>
        </div>
        {/* box 2 */}
        <div className="  p-6 rounded-3xl">
          <div className="bg-[#f3f4ee50] p-4 rounded-3xl">
            <h2 className="font-bold text-lg mb-2 text-[#14231f]">
              Today's Suggested Plan
            </h2>
            {/* List of suggested activities */}
            <ul className="list-disc pl-6">
              <li>9:00 AM - 10:00 AM: Review Math Concepts</li>
              <li>10:15 AM - 11:15 AM: Practice Coding Challenges</li>
              <li>11:30 AM - 12:30 PM: Work on Project</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDaylearning;
