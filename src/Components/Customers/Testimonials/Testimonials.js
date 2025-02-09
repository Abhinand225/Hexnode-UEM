/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './Testimonials.module.scss';
import img1 from '../../../assets/Images/chris-robinson.png';
import img2 from '../../../assets/Images/dalibor-kruljac.png';
import img3 from '../../../assets/Images/justin-modrak.png';
import left from '../../../assets/Icons/left-arrow.svg';
import right from '../../../assets/Icons/right-arrow.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    id: 1,
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    company: "Technology Coordinator",
    place: "East Troy Community School District",
    image: img3
  },
  {
    id: 2,
    quote: "Most complete MDM solution I found, and I tested many of them, including major names",
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
    image: img2
  },
  {
    id: 3,
    quote: "It seemed to be in-line with everything we were looking at",
    name: "Chris Robinson",
    company: "Executive Account Manager, NCS",
    image: img1
  }
];

const Testimonials = () => {

  const CustomPrevArrow = ({ onClick, currentSlide }) => (
    <button
      onClick={onClick}
      className={`${styles.slick_arrow} ${styles.slick_prev} ${currentSlide === 0 ? styles.disabled : ''}`}    >
      <img src={left} alt='left-arrow'></img>
    </button>
  );

  const CustomNextArrow = ({ onClick, currentSlide, slideCount }) => (
    <button
      onClick={onClick}
      className={`${styles.slick_arrow} ${styles.slick_next} ${currentSlide === slideCount - 1 ? styles.disabled : ''}`}    >
      <img src={right} alt='left-arrow'></img>
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section className={styles.sliderContainer}>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.slide}>
            <div className={styles.testimonialCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} image`}
                  className={styles.image}
                  loading='lazy'
                />
              </div>
              <div className={styles.content}>
                <div className={styles.quote}><h4>"{testimonial.quote}"</h4></div>
                <div className={styles.contentContainer}>
                  <p className={styles.name}>{testimonial.name}</p>
                  <small className={styles.role}>{testimonial.role}</small>
                  <small className={styles.company}>{testimonial.company}</small>
                  {testimonial.place && <small className={styles.company}> {testimonial.place}</small> }
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
