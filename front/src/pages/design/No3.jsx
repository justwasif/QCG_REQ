import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../components/TotalWeb";

export default function No3(){
    const {incScore} = useQuiz()
    const navigate = useNavigate();
    
    const handleInc = () => {
        incScore();
        navigate("/design4")
    }
    const rest=()=>{
      navigate("/design4")
    }
    
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-semibold text-white mb-8">
                Sport quiz
            </h1>

            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                    What does the principle of “contrast” help achieve in a design?
                </h2>

                <div className="flex flex-col gap-4">
                    <button onClick={handleInc} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Visual interest and emphasis
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Uniformity
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Repetition
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Simplicity
                    </button>
                </div>
            </div>
        </div>
    );
}