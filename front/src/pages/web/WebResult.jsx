import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../components/TotalWeb";

function WebResult(){
    const navigate = useNavigate();
    const {total} = useQuiz();
    
    const home=()=>{
        navigate("/home")
    }
    
    return(
        <div className="min-h-screen bg-indigo-600 flex flex-col items-center justify-center px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    quiz Completed
                </h1>
                
                <div className="text-center mb-8">
                    <p className="text-lg text-gray-600 mb-4">Your Score:</p>
                    <p className="text-6xl  mb-2">
                        {total}
                    </p>
                    <p className="text-xl text-gray-600">
                        out of 4
                    </p>
                </div>
                
                <div className="flex flex-col gap-4">
                    
                    
                    <button 
                        onClick={home}
                        className="w-full py-3 rounded-xl border border-gray-400 bg-gray-100 hover:bg-gray-200 transition font-medium"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WebResult;