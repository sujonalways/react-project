import { LuNotebookPen } from "react-icons/lu";

const navbar = () => {
  return (
    <div className="bg-[#f0f1eb]">
      <nav className=" container mx-auto flex justify-between py-4  items-center">
        <div className="flex items-center gap-2">
          <span className="bg-[#0e7c66] p-1 rounded-[5px]">
            <LuNotebookPen className=" max-w-5 max-h-5 text-white"  />
          </span>
          <span className="text-black font-semibold ">StudyFlow</span>
        </div>

        <ul className="flex gap-4 text-slate-900 items-center">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <div className="flex  gap-3 items-center">
          <button className="font-medium text-slate-900 border px-3 rounded-[10px] py-1.25 text-[16px]">
            Login
          </button>
          <button className="bg-[#0e7c66] font-bold text-white px-3 rounded-[10px] py-1.25 text-[16px]">
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
