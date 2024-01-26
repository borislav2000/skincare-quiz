import { createContext, useState } from "react";
import { quizQuestions } from "../questions";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [firstAnswer, setFirstAnswer] = useState(null);
  const [secondAnswer, setSecondAnswer] = useState(null);
  const [thirdAnswer, setThirdAnswer] = useState(null);
  const [fourthAnswer, setFourthAnswer] = useState(null);
  const [fifthAnswer, setFifthAnswer] = useState(null);

  const resetQuiz = () => {
    setFirstAnswer(null);
    setSecondAnswer(null);
    setThirdAnswer(null);
    setFourthAnswer(null);
    setFifthAnswer(null);
  };

  return (
    <QuizContext.Provider
      value={{
        quizQuestions,
        firstAnswer,
        setFirstAnswer,
        secondAnswer,
        setSecondAnswer,
        thirdAnswer,
        setThirdAnswer,
        fourthAnswer,
        setFourthAnswer,
        fifthAnswer,
        setFifthAnswer,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
