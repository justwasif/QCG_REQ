import { createContext, useContext, useState } from "react";

const quiz = createContext();

export function TotalWeb({ children }) {
    const [total, setTotal] = useState(0);
    
    const incScore = () => {
        setTotal(inc => inc + 1);  
    };
    
    return (
        <quiz.Provider value={{ total, incScore }}>
            {children}
        </quiz.Provider>
    );
}

export function useQuiz() {  
    const context = useContext(quiz);  
   
    return context;
}