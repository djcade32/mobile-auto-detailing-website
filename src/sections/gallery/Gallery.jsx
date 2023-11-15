import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

import styles from "./Gallery.module.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";

import pic1 from "../../assets/images/gallery-pic1.jpg";
import pic2 from "../../assets/images/gallery-pic2.jpg";
import pic3 from "../../assets/images/gallery-pic3.jpg";
import pic4 from "../../assets/images/gallery-pic4.jpg";
import pic5 from "../../assets/images/gallery-pic5.jpg";

const galleryData = [pic1, pic2, pic3, pic4, pic5];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <BsFillArrowRightCircleFill
      onMouseOver={({ target }) => (target.style.opacity = 0.7)}
      onMouseOut={({ target }) => (target.style.opacity = 1)}
      size={35}
      style={{ position: "absolute", right: 0 }}
      cursor="pointer"
      color="var(--primary)"
      onClick={() => onClick()}
    />
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <BsFillArrowLeftCircleFill
      onMouseOver={({ target }) => (target.style.opacity = 0.7)}
      onMouseOut={({ target }) => (target.style.opacity = 1)}
      size={35}
      style={{ position: "absolute", left: 0 }}
      cursor="pointer"
      color="var(--primary)"
      onClick={() => onClick()}
    />
  );
};

const Gallery = () => {
  return (
    <div className={`section ${styles.gallery}`} id="gallery">
      <SectionHeader text="Gallery" color="var(--primary)" />
      <div style={{ width: "100%" }}>
        <Carousel
          responsive={responsive}
          slidesToSlide={3}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          removeArrowOnDeviceType={["mobile"]}
          itemClass={styles.carousel_item}
        >
          {galleryData.map((pic, index) => (
            <div className={styles.gallery__imageContainer} key={index}>
              <img src={pic} alt="clean car" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
