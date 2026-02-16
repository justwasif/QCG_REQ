import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../components/TotalWeb";

export default function No4(){
    const {incScore} = useQuiz()
    const navigate = useNavigate();
    
    const handleInc = () => {
        incScore();
        navigate("/result")
    }
    const rest=()=>{
      navigate("/result")
    }
    
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-semibold text-white mb-8">
                Sport quiz
            </h1>

            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                    In design, white space (negative space) is important because it:
                </h2>

                <div className="flex flex-col gap-4">
                    <button onClick={handleInc} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Improves readability and clarity
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Fills empty areas randomly
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Makes the design look crowded
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Removes important elements
                    </button>
                </div>
            </div>
        </div>
    );
}