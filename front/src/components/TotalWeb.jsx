import { createContext,useContext,useState } from "react";
const quiz=createContext();
export function TotalWeb({children}){
    const [total,setTotal]=useState(0);
    const incScore=()=>{
        setTotal(ince=>ince+1);

    };
    return(
        <quiz.Provider value={{total,incScore}}>
            {children}
        </quiz.Provider>

    );

}
export function use(){
    const conntext=useContext(TotalWeb);
    return conntext;
   
}