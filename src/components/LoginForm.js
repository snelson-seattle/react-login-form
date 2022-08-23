import { useState } from "react";

const LoginForm = () => {
  return (
    <form className="bg-dark/70 text-white p-20 rounded-2xl w-[80%] max-w-[600px] flex flex-col gap-[20px] shadow-form">
      <h1 className="text-4xl text-center mb-[25px]">Welcome</h1>
      <div className="flex flex-col gap-[7px]">
        <label htmlFor="email" className="font-extralight text-base">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={`
            bg-light/30
            text-xl
            text-black
            p-[0.5em] 
            border-none 
            outline-none 
            rounded-[0.25em] 
            font-extralight 
            focus:shadow-outline
            `}
        />
        <span className="text-xs hidden">Valid email</span>
      </div>
      <div className="flex flex-col gap-[7px]">
        <label htmlFor="password" className="font-extralight text-base">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={`
            bg-light/30
            text-xl
            text-black
            p-[0.5em] 
            border-none 
            outline-none 
            rounded-[0.25em] 
            font-extralight 
            focus:shadow-outline
            `}
        />
        <span className="text-xs hidden">Incorrect password</span>
      </div>

      <button  
        type="submit" 
        className={`
            py-[0.5em] 
            px-[1em] 
            text-2xl
            text-white 
            bg-primary/25 
            outline-none
            border 
            border-solid 
            border-primary 
            rounded-[0.25em] 
            cursor-pointer
            hover:bg-primary/40
            focus:bg-primary/40
        `}>
            Login
        </button>
    </form>
  );
};

export default LoginForm;
