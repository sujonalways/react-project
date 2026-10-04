const HowitWorksCard = ({stepss , index}) => {
  return (
    <div className="bg-white rounded-2xl p-6 space-y-2 ">
      <h1 className="text-5xl pb-4 font-bold text-[#0e7c66]">{index + 1}</h1>
      <h2 className="text-2xl font-semibold">{stepss.title}</h2>
      <p>{stepss.description}</p>
    </div>
  );
};

export default HowitWorksCard;
