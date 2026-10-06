import { LuNotebookPen } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 mt-8 gap-4 text-center">
        {/* Company Info */}
       <div className="flex flex-col justify-center md:justify-items-center  gap-2">
         <h2 className="flex items-center justify-center md:justify-start gap-2 text-lg font-semibold ">
          <span className="bg-[#0e7c66] p-1 rounded-[5px]">
            <LuNotebookPen className="text-white" />
          </span>
          StudyFlow
        </h2>
        <p className="text-sm text-gray-400 md:max-w-xs text-center md:text-left">
          A study management platform designed to help students organize their
          learning, track progress, and achieve academic success.
        </p>
       </div>
       {/* Navigation Links */}
       {/* 1 */}
       <div>
        <ul className="flex flex-col  md:gap-2 text-center text-gray-400 md:text-left">
           <li>
            <a href="#">Home</a>
          </li>
            <li>
            <a href="#">About</a>
          </li>
            <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
         
        
        </ul>
       </div>
       {/* 2 */}
       <div>
        <ul className=" flex-col gap-2 text-center text-gray-400 md:text-left hidden md:flex">
           <li>
            <a href="#">Home</a>
          </li>
            <li>
            <a href="#">About</a>
          </li>
            <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
         
        
        </ul>
       </div>
       {/* 3 */}
       <div>
        <ul className="flex-col gap-2 text-center text-gray-400 md:text-left hidden md:flex">
           <li>
            <a href="#">Home</a>
          </li>
            <li>
            <a href="#">About</a>
          </li>
            <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
       
         
        </ul>
       </div>
      </div>
      <p className="text-center text-gray-500 text-sm py-2 mt-4 border-t border-gray-700    ">
        &copy; {new Date().getFullYear()} StudyFlow. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
