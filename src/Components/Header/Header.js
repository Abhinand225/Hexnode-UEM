import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const Header = ({ showButton }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setIsSticky(window.scrollY > 0);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileStickyClass = scrollDirection === "down" ? styles.topZero : styles.belowHeader;

  return (
    <>
      {/* Main Header */}
      <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
        <div className={styles.content}>
          <div className={styles.logo}>hexnode</div>
          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Why Hexnode</li>
              <li className={styles.navItem}>Features</li>
              <li className={styles.navItem}>Platforms</li>
              <li className={styles.navItem}>Customers</li>
            </ul>
          </nav>
          <div className={styles.headerRight}>
            <button className={`${styles.trialButton} ${showButton ? styles.tabButton : ""}`}>
              14 DAY FREE TRIAL
            </button>
            <button
              className={`${styles.mobileMenuToggle} ${mobileMenuOpen ? styles.mobileMenuToggleOpen : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobileSidebar}>
            <ul className={styles.mobileNavList}>
              <div className={styles.closeBtn}></div>
              <li className={styles.mobileNavItem}>Why Hexnode</li>
              <li className={styles.mobileNavItem}>Features</li>
              <li className={styles.mobileNavItem}>Platforms</li>
              <li className={styles.mobileNavItem}>Customers</li>
              <div className={styles.navActions}>
                <a href="#" role="link" className={styles.mobTrialBtn} aria-label="14 Day Free Trial">
                  14 Day Free Trial
                </a>
                <div className={styles.loginWrapper}>
                  <a href="#" className={styles.mobLoginBtn} role="link" aria-label="Login">
                    Login
                  </a>
                </div>
              </div>
            </ul>
          </div>
        )}
      </header>

      {showButton &&
        <div className={`${styles.mobileStickyHeader} ${mobileStickyClass}`}>
          <button className={styles.mobileStickyButton}> 14 DAY FREE TRIAL</button>
        </div>
      }
    </>
  );
};

export default Header;
