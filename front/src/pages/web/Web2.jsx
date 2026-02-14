import { useState } from "react";
import { useNavigate } from "react-router-dom";
import totalWeb from "../../components/totalWeb";

export default function Web2(){
    const [count,setCount]=useState(0);
    const navigate=useNavigate();
    const handleInc=()=>{
        setCount(2);
        totalWeb(count);
        navigate("/web3")


    }
    return (
  <div className="min-h-screen bg-indigo-600 flex flex-col items-center justify-center px-4">

    {/* Title */}
    <h1 className="text-4xl font-semibold text-white mb-8">
      Sport quiz
    </h1>

    {/* Card */}
    <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

      {/* Question */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Which of the following sports is not part of the triathlon?
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-4">
        <button onClick={handleInc} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
          Running
        </button>

        <button className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
          Swimming
        </button>

        <button className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
          Cycling
        </button>

        <button className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
          Horse-Riding
        </button>
      </div>

    </div>
  </div>
);
}