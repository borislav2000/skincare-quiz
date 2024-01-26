import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";
import Question from "../components/Question";

const FirstQuestion = () => {
  const { quizQuestions, firstAnswer, setFirstAnswer } =
    useContext(QuizContext);
  const currentQuestion = quizQuestions[0];

  const handleAnswerSelect = (selectedAnswer) => {
    setFirstAnswer(selectedAnswer);
  };

  return (
    <>
      <Question
        question={currentQuestion}
        selectedAnswer={firstAnswer}
        onAnswerSelect={handleAnswerSelect}
        backPage="/"
        nextPage="/question-2"
        backPageLabel="Back"
        nextPageLabel="Next question"
      />
    </>
  );
};

export default FirstQuestion;
