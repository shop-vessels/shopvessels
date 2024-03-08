import React from "react";

const login = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[50%] ">
        <p className="text-5xl mb-8 text-center">Welcome Back!</p>
        <label htmlFor="" className="font-semibold">
          Email
        </label>
        <div className="border-2 border-black/10 px-3 py-3 mb-6">
          <input
            type="text"
            placeholder="Email"
            className="outline-none w-full"
          />
        </div>
        <label htmlFor="" className="font-semibold">
          Password
        </label>
        <div className="border-2 border-black/10 px-3 py-3 mb-6">
          <input
            type="text"
            placeholder="Password"
            className="outline-none w-full"
          />
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex gap-1">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="text-sm font-thin">
              Remember me
            </label>
          </div>
          <a href="#" className="border-b border-black/10 text-sm font-light">
            Forgot Password?
          </a>
        </div>
        <button className="bg-[#1E1C27] text-white px-7 py-5 rounded-[40px] hover:bg-[#212326] transition-all duration-200 font-semibold mb-16">
          Sign in
        </button>
        <a
          href="#"
          className="border-b-2 border-black/10 text-sm font-thin text-center"
        >
          Create a new account
        </a>
      </div>
    </div>
  );
};

export default login;
