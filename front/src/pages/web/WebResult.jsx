import { useNavigate } from "react-router-dom";
import { use } from "../../components/TotalWeb";
function WebResult(){
    const navigate=useNavigate();
    const {total,setTotal}=use();
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