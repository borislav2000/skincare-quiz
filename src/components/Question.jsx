import styles from "./Question.module.css";
import NavigationButtons from "./UI/NavigationButtons";

const Question = (props) => {
  return (
    <div className={styles.question_container}>
      <h1>{props.question.text}</h1>
      <div className={styles.answers_container}>
        {props.question.answers.map((answer, index) => (
          <div
            className={`${styles.answer_container} ${
              props.selectedAnswer === answer ? styles.selected : ""
            }`}
            key={index}
            onClick={() => props.onAnswerSelect(answer)}
          >
            <label htmlFor={`answer_${index}`} className={styles.answer_label}>
              {answer}
              <input
                type="radio"
                name="answer"
                id={`answer_${index}`}
                value={answer}
                className={styles.answer_input}
                checked={props.selectedAnswer === answer}
                readOnly
              />
            </label>
          </div>
        ))}
      </div>
      <NavigationButtons
        backPage={props.backPage}
        backPageLabel={props.backPageLabel}
        nextPage={props.nextPage}
        nextPageLabel={props.nextPageLabel}
      />
    </div>
  );
};

export default Question;
