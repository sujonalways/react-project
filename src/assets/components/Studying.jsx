import { AiFillCheckCircle } from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";
import { GoGear, GoGitBranch, GoGoal } from "react-icons/go";
import SectionHeder from "./shared/SectionHeder";

const studying = () => {
    return (
    <section className="container mx-auto text-center py-15 space-y-8">
        {/* input fields */}
        <SectionHeder title="Studying without a system is exhausting" description="you can use StudyFlow to create a structured approach to your studies and make the process more efficient.   " />
        {/* study tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                <GoGoal className="mx-auto text-6xl text-[#0e7c66]" />
                <h3 className="text-2xl font-semibold mt-4">Goals Stay Vague</h3>
                <p className="text-gray-600 mt-2">Without clear goals, it's easy to lose focus and direction in your studies. </p>
             </div>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                <GoGear className="mx-auto text-6xl text-[#0e7c66]" />
                <h3 className="text-2xl font-semibold mt-4">Systematic Approach</h3>
                <p className="text-gray-600 mt-2">A structured study system helps you stay organized and make the most of your time. </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
                <AiFillCheckCircle className="mx-auto text-6xl text-[#0e7c66]" />
                <h3 className="text-2xl font-semibold mt-4">Achieve Your Goals</h3>
                <p className="text-gray-600 mt-2">With a clear plan and consistent effort, you can achieve your academic goals more effectively. </p>
            </div>
        </div>

    </section>
    );
};

export default studying;