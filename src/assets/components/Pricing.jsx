import SectionHeder from "./shared/SectionHeder";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      pricingType: "Free",
      price: "0",
      description: "Basic plan for individuals",
      expiration: "Forever",
      features: [
        "Access to basic features",
        "Limited storage space",
        "Community support",
        "Basic analytics"
      ],
    },
    {
      id: 2,
      pricingType: "Pro",
      price: "500",
      description: "Advanced plan for professionals",
      expiration: "per month",
      features: [
        "Access to all features",
        "Unlimited storage space",
        "Priority support",
        "Advanced analytics",
        "Custom reporting"
      ],
    }
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <SectionHeder
        title="Pricing"
        description="Choose the perfect plan for your needs."
      />
      <div className="flex justify-center mt-2">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 w-185 mt-8 p-4 rounded-lg shadow-md">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`border bg-white rounded-lg p-6 mt-4 mb-4  ${plan.pricingType === "Pro" ? "my-0 border-[#0E7C66] border-2" : "" }`}>
              <h3 className="text-xl font-semibold mb-2">{plan.pricingType}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold mb-4">
                ${plan.price}
                <span className="text-[18px] font-bold text-[#0E7C66] ml-1">
                  {plan.expiration}
                </span>
              </p>
              <ul className="list-disc list-inside mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2  flex items-center gap-3 list-none "> <FaCheck className="text-[14px] text-[#0E7C66]"/>
                    {feature}
                  </li>
                ))}
              </ul>
            <button className= {` w-full  py-2 px-4 rounded-md  transition-colors duration-300 cursor-pointer ${plan.pricingType === "Pro" ? "bg-[#0E7C66] hover:bg-[#0B5A4D] text-white" : "bg-white border-[1px] border-gray-400 hover:bg-gray-200"}`}>
              Get Started
            </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
