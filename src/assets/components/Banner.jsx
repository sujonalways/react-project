import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Banner = () => {
  return (
    <div className="container mx-auto text-center py-15 space-y-8">
      <span className="badge">Built for students who like to see progress</span>
      <h2 className="font-semibold text-4xl mx-auto max-w-125">
        Turn big goals into daily tasks you'll actually finish
      </h2>
      <p className="mx-auto max-w-175">
        set a goal, break it into tasks, and watch a progress bar move every
        time you check one off . No spreadsheets, no guessing what to study next
      </p>
      {/* button section  */}
      <div className="flex gap-4 items-center justify-center">
        <button className="btn bg-[#0e7c66] text-white border-none">
          Get started free{" "}
          <HiOutlineArrowSmallRight className="pl-1 text-2xl" />
        </button>
        <button className="btn ">See how it works </button>
      </div>
      {/* progress section */}
      <div className="card bg-base-100 w-130 shadow-sm text-black space-y-4 mx-auto p-4">
        <div className="flex justify-between items-center gap-4 ">
          <h2 className=" text-black font-medium font-serif">
            Today's progress
          </h2>
          <p className="text-2xl font-bold text-black font-sans">
            50% complete
          </p>
        </div>

        <progress
          className="progress h-3 text-[#0e7c66]"
          value="50"
          max="100"
        ></progress>
        <ul className="space-y-4 ">
          <li className="flex border rounded-[5px] p-1 border-[#0e7c66] items-center gap-4">
            <span>✅</span> Solve 5 math problems
          </li>
          <li className="flex border rounded-[5px] p-1 border-[#0e7c66] items-center gap-4">
            <span>✅</span> Read 20 pages of a book
          </li>
          <li className="flex border rounded-[5px] p-1 border-[#0e7c66] items-center gap-4 line-through">
            <span>❌</span> Write a journal entry
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
