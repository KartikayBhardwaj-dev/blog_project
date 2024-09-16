import React from 'react';
import { NavLink } from "react-router-dom";
const ContinueOptions = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video on the left side */}
      <video
        playsInline
        className="absolute top-0 left-0 w-1/3 h-full object-cover"
        autoPlay
        loop
        muted
        src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
      ></video>
      
      {/* Video on the right side */}
      <video
        playsInline
        className="absolute top-0 right-0 w-1/3 h-full object-cover"
        autoPlay
        loop
        muted
        src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
      ></video>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg p-6">
        <h1 className="text-2xl font-light text-gray-500 mb-8 text-left w-full">
          <span className='font-bold text-md text-black'>Sign Up to </span>
          BLOG<span className="font-bold text-3xl text-black">&</span>MORE
        </h1>
        <NavLink to='/google' className="w-full flex justify-center items-center px-3 py-3  border border-gray-300 rounded-3xl shadow-sm text-white font-bold text-sm bg-black hover:bg-gray-600 transition mb-4">  
          Sign Up with Google
        
        </NavLink>
        

        {/* Or Divider */}
        <div className="relative w-full flex items-center mb-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Continue with Email */}
        <NavLink
  to='/email'
  className="w-full flex justify-center items-center py-3 px-4 border border-gray-300 rounded-3xl shadow-sm text-gray-700 bg-white font-bold text-sm hover:bg-gray-300 transition mt-6"
>
  Continue with Email
</NavLink>

<span className='block mt-4 text-center font-bold text-md'>
  Already Have An Account? <NavLink to='/signin' className=" underline hover:no-underline">Sign In</NavLink>
</span>
      </div>

    </div>
  );
};

export default ContinueOptions;