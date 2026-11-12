
import React, { useState } from 'react';
import { LuNotebookPen } from 'react-icons/lu';
import { Link } from 'react-router';
// import { Link } from 'react-router-dom';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submit");
        const email = e.target.emails.value;
        const password = e.target.passwords.value;

        console.log(email);
        console.log(password);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3f4ee4c] px-4 py-7 relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] top-0 left-0"></div>
            <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] bottom-0 right-0"></div>

            {/* Sign In Card */}
            <div className="relative bg-[#080D1A] w-full max-w-md  border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 sm:p-10">

                {/* Logo */}
                <div className="text-center mb-8">
                   <div className="flex justify-center items-center gap-2">
                             <span className="bg-[#0e7c66]  p-1 rounded-[5px]">
                               <LuNotebookPen className=" text-3xl text-white"  />
                             </span>
                             <span className="text-white font-semibold ">StudyFlow</span>
                           </div>

                    <h1 className="text-3xl font-bold text-white mt-5">
                        Welcome Back!
                    </h1>

                    <p className="text-gray-400 text-sm mt-2">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            name = "emails"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-[#101B30] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-gray-300">
                                Password
                            </label>

                            <button className="text-xs text-blue-400 hover:text-blue-300 transition cursor-pointer"> Forgot Password?</button>

                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                name = "passwords"
                                required
                                className="w-full px-4 py-3 pr-16 rounded-xl bg-[#101B30] border border-white/10 text-white placeholder-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition "
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-xs text-blue-400 hover:text-blue-300"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                            <input
                                type="checkbox"
                                className="accent-blue-500 w-4 h-4"
                            />
                            Remember me
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <button
                    
                        type="submit"
                        className="w-full py-3 border border-white/10  rounded-xl  from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] transition duration-300 cursor-pointer"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-white/10"></div>
                    <span className="text-gray-500 text-xs">OR CONTINUE WITH</span>
                    <div className="flex-1 h-px bg-white/10"></div>
                </div>

                {/* Google Sign In */}
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-400 mt-8">
                    Don't have an account?{' '}
                    <Link to ="/singup">
                    
                    <button  className="text-blue-400 font-semibold hover:text-blue-300 transition">Sing up</button>
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default SignIn;
