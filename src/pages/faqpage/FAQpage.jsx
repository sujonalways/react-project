import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const FAQpage = () => {
    return (
        <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-blue-600">404</h1>

          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Page Not Found
          </h2>

          <p className="text-gray-500 mt-3">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <div className="flex justify-center mt-5">
            <div className="w-25 bg-blue-400 text-white rounded-2xl p-1 cursor-pointer hover:bg-blue-500">
              <Link to="/" className="flex items-center justify-center gap-2"> <FaArrowLeft /> Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default FAQpage;