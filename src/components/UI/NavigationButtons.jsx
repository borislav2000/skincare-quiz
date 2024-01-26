import ButtonLink from "./ButtonLink";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = (props) => {
  return (
    <div className={styles.navigation_buttons}>
      <ButtonLink className={styles.back_button} to={props.backPage}>
        {props.backPageLabel}
      </ButtonLink>
      <ButtonLink className={styles.next_button} to={props.nextPage}>
        {props.nextPageLabel}
      </ButtonLink>
    </div>
  );
};

export default NavigationButtons;
