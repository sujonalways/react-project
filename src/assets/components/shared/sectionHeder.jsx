

const SectionHeder = ({ title, description }) => {
    return (
       <div className="space-y-4 max-w-2xl text-center mx-auto">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-lg text-gray-600">{description}</p>
        </div>
    );
};

export default SectionHeder;