import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
    
    const navigate = useNavigate("/");

  return (
    <div className="px-4 py-2 bg-green-500">
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" text-black text-xl font-semibold bg-amber-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Return to Home
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" text-black text-xl font-semibold bg-amber-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Back
      </button>
      <button
        onClick={() => {
          navigate(+1);
        }}
        className=" text-black text-xl font-semibold bg-amber-400 px-5 py-2 rounded m-2 cursor-pointer active:scale-95"
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
