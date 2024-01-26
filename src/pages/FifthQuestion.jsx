import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Question from "../components/Question";

const FifthQuestion = () => {
  const { quizQuestions, fifthAnswer, setFifthAnswer } =
    useContext(QuizContext);
  const currentQuestion = quizQuestions[4];

  const handleAnswerSelect = (selectedAnswer) => {
    setFifthAnswer(selectedAnswer);
  };

  return (
    <>
      <Question
        question={currentQuestion}
        selectedAnswer={fifthAnswer}
        onAnswerSelect={handleAnswerSelect}
        backPage="/question-4"
        nextPage="/results"
        backPageLabel="Back"
        nextPageLabel="Discover your results"
      />
    </>
  );
};

export default FifthQuestion;
