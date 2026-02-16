import { createContext, useContext, useState } from "react";

const quiz = createContext();

export function TotalWeb({ children }) {
    const [total, setTotal] = useState(0);
    
    const incScore = () => {
        setTotal(inc => inc + 1);  // Fixed typo: ince -> inc
    };
    
    return (
        <quiz.Provider value={{ total, incScore }}>
            {children}
        </quiz.Provider>
    );
}

export function useQuiz() {  // Renamed for clarity
    const context = useContext(quiz);  // Fixed: use quiz context, not TotalWeb
   
    return context;
}