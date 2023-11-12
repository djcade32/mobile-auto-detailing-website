import React from "react";

import styles from "./TestimonialCard.module.css";

import { AiFillStar } from "react-icons/ai";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={styles.testimonialCard}>
      <p>{testimonial.name}</p>
      <div>
        {[...Array(5)].map((e, index) => (
          <AiFillStar key={index} size={25} color="var(--accent)" />
        ))}
      </div>
      <p>{testimonial.testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
