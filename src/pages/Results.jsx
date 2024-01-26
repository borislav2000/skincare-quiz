import { useEffect, useContext, useState } from "react";
import { QuizContext } from "../store/QuizContext";
import { useNavigate } from "react-router-dom";
import styles from "./Results.module.css";

const Results = () => {
  const {
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    fourthAnswer,
    fifthAnswer,
    resetQuiz,
  } = useContext(QuizContext);

  const [recommendedProducts, setRecommendedProducts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jeval.com.au/collections/hair-care/products.json?page=1")
      .then((res) => res.json())
      .then((data) => {
        const filteredProducts = data.products.filter(
          (product) =>
            product.tags.includes(`type_${firstAnswer.toLowerCase()}`) ||
            product.body_html.includes(`${secondAnswer.toLowerCase()}`) ||
            product.body_html.includes(`${thirdAnswer.toLowerCase()}`) ||
            product.body_html.includes(`${fourthAnswer.toLowerCase()}`) ||
            product.body_html.includes(`${fifthAnswer.toLowerCase()}`) ||
            product.title.includes(`${secondAnswer.toLowerCase()}`) ||
            product.title.includes(`${thirdAnswer.toLowerCase()}`) ||
            product.title.includes(`${fourthAnswer.toLowerCase()}`) ||
            product.title.includes(`${fifthAnswer.toLowerCase()}`)
        );
        if (filteredProducts.length > 0) {
          setRecommendedProducts(filteredProducts);
        }
      })
      .catch((error) => console.log(error));
  }, [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer]);

  const handleRetake = () => {
    resetQuiz();
    navigate("/");
  };
  console.log(recommendedProducts);

  return (
    <>
      <div className={styles.image_container}>
        <div className={styles.overlay_container}>
          <h2 className={styles.heading}>
            Build you everyday self care routine.
          </h2>
          <p className={styles.description}>
            Perfect for if you're looking for soft, nourished skin, our
            moisturizing body washes are made with skin-natural nutrients that
            work with your skin to replenish moisture. With a light formula, the
            bubbly lather leaves your skin feeling cleansed and cared for. And
            by choosing relaxing fragrances you can add a moment of calm to the
            end of your day.
          </p>
        </div>
      </div>
      <ul>
        {recommendedProducts.map((product) => (
          <li>
            <span>
              {product.title} - {product.variants[0].price}$
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Results;
