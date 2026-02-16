import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../components/TotalWeb";
function WebResult(){
    const navigate=useNavigate();
    const {total,setTotal}=useQuiz();
    return(
        <div>
            <div>
                <h1>
                    your score
                    <div>
                        <p>
                            {total}
                        </p>
                        <p>

                        </p>
                    </div>
                </h1>
            </div>
        </div>
    )

}
export default  WebResult;