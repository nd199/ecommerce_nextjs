import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styles from "./sr.module.css";

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className={styles.stars}>
      {Array(fullStars).fill(<FaStar className={styles.star} />)}
      {halfStars === 1 && <FaStarHalfAlt className={styles.star} />}
      {Array(emptyStars).fill(<FaRegStar className={styles.emptyStar} />)}
    </div>
  );
};
