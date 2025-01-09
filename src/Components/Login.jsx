import React from "react";

const Login = () => {
  return (
    <div className="w-full md:w-1/3 mx-auto mt-6 flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Login Here</h1>

      {/* Username Input */}
      <div className="w-full mb-4">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
        />
      </div>

      {/* Password Input */}
      <div className="w-full mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
        />
      </div>

      {/* Remember Me and Forgot Password */}
      <div className="w-full flex items-center justify-between mb-6">
        <label className="flex items-center text-gray-600">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button
        type="button"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Login
      </button>

      {/* Register Link */}
      <p className="mt-6 text-sm text-gray-600">
        Don’t have an account?{" "}
        <a
          href="#"
          className="text-indigo-600 font-medium hover:text-indigo-800"
        >
          Register
        </a>
      </p>
    </div>
  );
};

export default Login;
