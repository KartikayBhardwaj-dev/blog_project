import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState('');
  const [Data, setData] = useState(
    {
        name:'',
        userName:'',
        email:'',
        password:''
    }
  )
  const [error, seterror] = useState({
    errors:{},
    isError:false
  })
   
  const handleChange=(event,property)=>{
    setData({...Data,[property]:event.target.value})
  }

  const handleBackClick = () => {
    navigate('/signup');
  };

  const handleFocus = (field) => {
    setFocusedInput(field);
  };

  const handleBlur = () => {
    setFocusedInput('');
  };
  const submitForm=(event)=>{
        event.preventDefault()
        console.log(Data);
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 overflow-hidden">
      {/* Left side video */}
      <video
        playsInline
        className="absolute top-0 left-0 w-1/3 h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
      ></video>

      {/* Right side video */}
      <video
        playsInline
        className="absolute top-0 right-0 w-1/3 h-full object-cover opacity-50"
        autoPlay
        loop
        muted
        src="https://cdn.dribbble.com/uploads/48292/original/30fd1f7b63806eff4db0d4276eb1ac45.mp4?1689187515"
      ></video>
     

      {/* Central sign-up form */}
      <div className="relative z-10 w-full max-w-lg p-10 bg-white shadow-2xl rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Back button */}
        <button
          className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleBackClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300 hover:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Sign-up header */}
        <h1 className="text-4xl font-bold  text-center text-gray-900 mb-8 tracking-wider animate-bounce">
          Create Your Account
        </h1>

        {/* Sign-up form */}
        <form className="space-y-8" onSubmit={submitForm}>
          {/* Name Field */}
          <div className="relative">
            <label
              htmlFor="name"
              className={`absolute top-2 left-4 text-sm transition-all ${
                focusedInput === 'name' ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:shadow-md placeholder-transparent"
              placeholder="Name"
              onChange={(e)=>handleChange(e,'name')}
              value={Data.name}
              required
            />
          </div>

          {/* Username Field */}
          <div className="relative">
            <label
              htmlFor="username"
              className={`absolute top-2 left-4 text-sm transition-all ${
                focusedInput === 'username' ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              onFocus={() => handleFocus('username')}
              onBlur={handleBlur}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:shadow-md placeholder-transparent"
              placeholder="Username"
              onChange={(e)=>handleChange(e,'userName')}
              value={Data.userName}
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute top-2 left-4 text-sm transition-all ${
                focusedInput === 'email' ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:shadow-md placeholder-transparent"
              placeholder="Email"
              onChange={(e)=>handleChange(e,'email')}
              value={Data.email}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute top-2 left-4 text-sm transition-all ${
                focusedInput === 'password' ? 'text-blue-500' : 'text-gray-500'
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 hover:shadow-md placeholder-transparent"
              placeholder="Password"
              onChange={(e)=>handleChange(e,'password')}
              value={Data.password}
              required
            />
          </div>

          {/* Create Account Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 font-bold text-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-gradient-to-l hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <p className="text-md font-bold text-black text-center mt-6">
          Already have an account?{' '}
          <a href="/signin" className="text-black font-bold text-md underline hover:no-underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;