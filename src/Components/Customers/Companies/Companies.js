// Companies.js
import React from "react";
import Slider from "react-slick";
import "./Companies.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1  from '../../../assets/Icons/lowes.svg';
import logo2  from '../../../assets/Icons/polaris.svg';
import logo3  from '../../../assets/Icons/gorillas.svg';
import logo4  from '../../../assets/Icons/wolt.svg';
import logo5  from '../../../assets/Icons/marriot.svg';
import logo6  from '../../../assets/Icons/merck.svg';
import logo7  from '../../../assets/Icons/costco.svg';
import logo8  from '../../../assets/Icons/saic.svg';
import logo9  from '../../../assets/Icons/hilton.svg';
import logo10  from '../../../assets/Images/group1-automotive.png';

const Companies = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, 
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 7, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={`Companies`}>
      <div className='sliderShadow leftSlider'></div>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className={`logoItem`}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className='sliderShadow rightSlider'></div>
    </div>
  );
};

export default Companies;
