import { FaArrowRight } from "react-icons/fa6";
const NextStudySession = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center bg-gray-100 p-6 py-10 rounded max-w-[900px]  mx-auto shadow-md rounded-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">
          Set Your First Goal in under two minutes. No credit card required.
        </h2>
        <p className="text-lg mb-6">
          your next study session could the one that sticks
        </p>
        <div className="flex justify-center">
          <button className="bg-[#0E7C66] text-white px-4 py-2 flex gap-2  items-center rounded hover:bg-[#0B5A4D] transition-colors duration-300 cursor-pointer">
            Get Started <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NextStudySession;
