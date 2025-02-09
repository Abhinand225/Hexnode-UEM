import React from "react";
import Slider from "react-slick";
import "./Companies.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../../../assets/Icons/lowes.svg';
import logo2 from '../../../assets/Icons/polaris.svg';
import logo3 from '../../../assets/Icons/gorillas.svg';
import logo4 from '../../../assets/Icons/wolt.svg';
import logo5 from '../../../assets/Icons/marriot.svg';
import logo6 from '../../../assets/Icons/merck.svg';
import logo7 from '../../../assets/Icons/costco.svg';
import logo8 from '../../../assets/Icons/saic.svg';
import logo9 from '../../../assets/Icons/hilton.svg';
import logo10 from '../../../assets/Images/group1-automotive.png';

const Companies = () => {
  // Company data with proper names for accessibility
  const companyLogos = [
    { src: logo1, name: "Lowes" },
    { src: logo2, name: "Polaris" },
    { src: logo3, name: "Gorillas" },
    { src: logo4, name: "Wolt" },
    { src: logo5, name: "Marriott" },
    { src: logo6, name: "Merck" },
    { src: logo7, name: "Costco" },
    { src: logo8, name: "SAIC" },
    { src: logo9, name: "Hilton" },
    { src: logo10, name: "Group 1 Automotive" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
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
    <section 
      className="Companies"
      aria-label="Featured Companies Slider"
    >
      <div 
        className="sliderShadow leftSlider" 
        aria-hidden="true"
      />
      
      <div className="slider-container">
        <Slider {...settings}>
          {companyLogos.map((company, index) => (
            <div 
              key={index} 
              className="logoItem"
              role="group"
              aria-label={`${company.name} logo`}
            >
              <img 
                src={company.src} 
                alt={`${company.name}`}
                loading="lazy"
                width="auto"
                height="auto"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div 
        className="sliderShadow rightSlider" 
        aria-hidden="true"
      />
    </section>
  );
};

export default Companies;