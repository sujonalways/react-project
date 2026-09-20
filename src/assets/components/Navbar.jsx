import { LuNotebookPen } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="bg-[#f0f1eb]">
      <nav className=" container mx-auto flex justify-between py-4 gap-4 items-center">
        <span>
          <LuNotebookPen className="text-[#0e7c66] w-8 h-8" />
        </span>

        <ul className="flex gap-4  text-slate-900 items-center">
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

        <div className="flex gap-3 items-center">
          <button className="font-medium text-slate-900 border px-3 rounded-2xl py-2 text-[20px]">
            Login
          </button>
          <button className="bg-[#0e7c66] font-bold text-white px-3 rounded-2xl py-2 text-[20px]">
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
