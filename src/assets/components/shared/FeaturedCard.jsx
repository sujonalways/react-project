const FeaturedCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
      {icon}
      <h3 className="text-2xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default FeaturedCard;
