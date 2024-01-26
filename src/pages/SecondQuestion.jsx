import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Question from "../components/Question";

const SecondQuestion = () => {
  const { quizQuestions, secondAnswer, setSecondAnswer } =
    useContext(QuizContext);
  const currentQuestion = quizQuestions[1];

  const handleAnswerSelect = (selectedAnswer) => {
    setSecondAnswer(selectedAnswer);
  };

  return (
    <>
      <Question
        question={currentQuestion}
        selectedAnswer={secondAnswer}
        onAnswerSelect={handleAnswerSelect}
        backPage="/question-1"
        nextPage="/question-3"
        backPageLabel="Back"
        nextPageLabel="Next question"
      />
    </>
  );
};
export default SecondQuestion;
