import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Question from "../components/Question";

const FourthQuestion = () => {
  const { quizQuestions, fourthAnswer, setFourthAnswer } =
    useContext(QuizContext);
  const currentQuestion = quizQuestions[3];

  const handleAnswerSelect = (selectedAnswer) => {
    setFourthAnswer(selectedAnswer);
  };

  return (
    <>
      <Question
        question={currentQuestion}
        selectedAnswer={fourthAnswer}
        onAnswerSelect={handleAnswerSelect}
        backPage="/question-3"
        nextPage="/question-5"
        backPageLabel="Back"
        nextPageLabel="Next question"
      />
    </>
  );
};

export default FourthQuestion;
