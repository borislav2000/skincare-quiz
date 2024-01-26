import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.image_container}>
      <div className={styles.overlay_container}>
        <h2 className={styles.heading}>
          Build a self care routine suitable for you
        </h2>
        <p className={styles.description}>
          Take out test to get a personalised self care routine based on your
          needs.
        </p>
      </div>
      <Link to="/question-1">
        <span className={styles.homepage_button_text}>Start the quiz</span>
      </Link>
    </div>
  );
};

export default Home;
