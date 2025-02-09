/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.links}>
              <ul>
                <li>
                  <a href="#" aria-label="Read our Terms of Use">Terms of Use</a>
                </li>
                <li>
                  <a href="#" aria-label="Read our Privacy Policy">Privacy</a>
                </li>
                <li>
                  <a href="#" aria-label="Learn about our Cookie Policy">Cookies</a>
                </li>
              </ul>
            </div>
            <div className={styles.copyright}>
              <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  )
}

export default Footer