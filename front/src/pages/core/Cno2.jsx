
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../components/TotalWeb";

export default function Cno2(){
    const {incScore} = useQuiz()
    const navigate = useNavigate();
    
    const handleInc = () => {
        incScore();
        navigate("/core3")
    }
    const rest=()=>{
      navigate("/core3")
    }
    
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-semibold text-white mb-8">
                Sport quiz
            </h1>

            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">
                    Which property allows a qubit to exist in multiple states at the same time?
                </h2>

                <div className="flex flex-col gap-4">
                    <button onClick={handleInc} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Superposition
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Entanglement
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Interference
                    </button>

                    <button onClick={rest} className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium">
                        Decoherence
                    </button>
                </div>
            </div>
        </div>
    );
}