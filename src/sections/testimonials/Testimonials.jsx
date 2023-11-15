import React from "react";

import styles from "./Testimonials.module.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import TestimonialCard from "../../components/testimonialCard/TestimonialCard";

const testimonialsData = [
  {
    name: "Gabe Macon",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. ",
  },
  {
    name: "Anna Rosline",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
  },
  {
    name: "Mallory Williams",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. ",
  },
];

const Testimonials = () => {
  // May want to turn this into a carousel in the future
  return (
    <div className={`section ${styles.testimonials}`} id="testimonials">
      <div className="app__overlay" />
      <div className={styles.testimonials__content}>
        <SectionHeader text="Testimonials" color="white" />
        <div className={styles.testimonials__content_testimonials}>
          {testimonialsData.map((testimonial, index) => {
            if (testimonialsData.length - 1 === index) {
              return <TestimonialCard key={index} testimonial={testimonial} />;
            } else {
              return (
                <>
                  <TestimonialCard testimonial={testimonial} />
                  <div className={styles.testimonials__content_testimonials_divider} />
                </>
              );
            }
          })}
        </div>
      </div>
      <div style={{ backgroundColor: "var(--accent)", height: 20, position: "relative" }} />
    </div>
  );
};

export default Testimonials;
