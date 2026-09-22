const Stats = () => {
  return (
    <div className="bg-[#f0f1eb] py-8 text-center">
      <div className="container mx-auto grid grid-cols-4 gap-x-4">
        <div>
          <h2 className="text-3xl font-bold text-[#0e7c66]">12,400+</h2>
          <p className="text-lg text-gray-600">Students using StudyFlow</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0e7c66]">1.2M</h2>
          <p className="text-lg text-gray-600">Study sessions completed</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0e7c66]">89%</h2>
          <p className="text-lg text-gray-600">Student satisfaction rate</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0e7c66]">4.8/5</h2>
          <p className="text-lg text-gray-600">Average student rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
