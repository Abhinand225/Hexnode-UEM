import React from "react";
import styles from "./Banner.module.scss";
import banner from "../../assets/Images/banner.jpeg";
import banner2 from "../../assets/Images/baner.png";
import logo1 from "../../assets/Images/idc.png";
import logo2 from "../../assets/Images/forrester.png";
import logo3 from "../../assets/Images/gartner.png";

const Banner = () => {
  return (
    <section 
      className={styles.bannerContainer}
      aria-label="Unified Endpoint Management Banner"
    >
      <div className={styles.banner}>
        <div className={styles.textSection}>
          <h1>Unified Endpoint Management</h1>
          <h2>Gain control and visibility over your endpoints</h2>
          <p>
            Hexnode's UEM solution allows you to simplify endpoint management and free up IT. 
            Focus on the big picture while Hexnode works on the details.
          </p>
          
          <div className={styles.form} role="form">
            <input 
              type="email" 
              id="email-input"
              placeholder="  Email"
              aria-label="Enter your email"
            />
            <button 
              id="banner-section"
              aria-label="Try it out"
            >
              LET'S TRY IT OUT!
            </button>
          </div>
        </div>

        <div className={styles.imageSection} aria-label="Feature highlights">
          <img 
            src={banner} 
            alt="Woman working on laptop"
            className={styles.mainImage}
            loading="lazy"
          />
          <img 
            src={banner2} 
            alt="Woman working on laptop"
            className={styles.secondaryImage}
            loading="lazy"
          />

          {/* Status Badges */}
          <div 
            className={`${styles.groupWrapper} ${styles.passwordBadge}`}
            role="status"
            aria-label="Password policy status"
          >
            <div className={`${styles.circleBackground} ${styles.groupHover}`} />
            <div className={styles.circleForeground}>
              <div className={styles.iconWrapper}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16.188" 
                  height="11.021" 
                  viewBox="0 0 16.188 11.021"
                  aria-hidden="true"
                >
                  <path 
                    d="M-1939.354-218.176l5.416,5.14,9.4-8.917" 
                    transform="translate(1940.042 222.678)" 
                    fill="none" 
                    stroke="#db962c" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <span className={styles.text}>Password policy applied</span>
          </div>

          <div 
            className={`${styles.groupWrapper} ${styles.kioskBadge}`}
            role="status"
            aria-label="Kiosk mode status"
          >
            <div className={`${styles.circleBackground} ${styles.groupHover}`} />
            <div className={styles.circleForeground}>
              <div className={styles.iconWrapper}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16.188" 
                  height="11.021" 
                  viewBox="0 0 16.188 11.021"
                  aria-hidden="true"
                >
                  <path 
                    d="M-1939.354-218.176l5.416,5.14,9.4-8.917" 
                    transform="translate(1940.042 222.678)" 
                    fill="none" 
                    stroke="#db962c" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <span className={styles.text}>TvOS Kiosk Active</span>
          </div>

          <div 
            className={`${styles.groupWrapper} ${styles.deviceBadge}`}
            role="status"
            aria-label="Device enrollment status"
          >
            <div className={`${styles.circleBackground} ${styles.groupHover}`} />
            <div className={styles.circleForeground}>
              <div className={styles.iconWrapper}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16.188" 
                  height="11.021" 
                  viewBox="0 0 16.188 11.021"
                  aria-hidden="true"
                >
                  <path 
                    d="M-1939.354-218.176l5.416,5.14,9.4-8.917" 
                    transform="translate(1940.042 222.678)" 
                    fill="none" 
                    stroke="#db962c" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <span className={styles.text}>Device Enrolled</span>
          </div>
        </div>
      </div>

      <div className={styles.badges}>
        <div className={styles.badgesContainer}>
          <div className={styles.allBadges}>
            <div className={styles.singleBadge}>
              <img 
                src={logo1} 
                alt="IDC Leader Badge"
                loading="lazy"
              />
              <p>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
            </div>
            <div className={styles.badgeBorder} />
            <div className={styles.singleBadge}>
              <img 
                src={logo3} 
                alt="Gartner Recognition Badge"
                loading="lazy"
              />
              <p>Hexnode was recognized in the 2023 Gartner® Market Guide for Unified Endpoint Management Tools.</p>
            </div>
            <div className={styles.badgeBorder} />
            <div className={styles.singleBadge}>
              <img 
                src={logo2} 
                alt="Forrester Notable Vendor Badge"
                loading="lazy"
              />
              <p>Forrester includes Hexnode as a notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;