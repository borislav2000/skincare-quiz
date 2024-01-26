import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Question from "../components/Question";

const ThirdQuestion = () => {
  const { quizQuestions, thirdAnswer, setThirdAnswer } =
    useContext(QuizContext);
  const currentQuestion = quizQuestions[2];

  const handleAnswerSelect = (selectedAnswer) => {
    setThirdAnswer(selectedAnswer);
  };

  return (
    <>
      <Question
        question={currentQuestion}
        selectedAnswer={thirdAnswer}
        onAnswerSelect={handleAnswerSelect}
        backPage="/question-2"
        nextPage="/question-4"
        backPageLabel="Back"
        nextPageLabel="Next question"
      />
    </>
  );
};

export default ThirdQuestion;
