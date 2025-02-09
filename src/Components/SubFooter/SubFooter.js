/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './SubFooter.module.scss';

function SubFooter() {

  return (
    <div className={styles.section}>
      <div className={styles.anchor}></div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h3 className={styles.heading}>
            Get Hexnode UEM and start securing your endpoints
          </h3>
        </div>
        <div className={styles.buttonContainer}>
          <a
            className={styles.button}
            href="#"
          >
            TRY HEXNODE FOR FREE
          </a>
        </div>
      </div>
    </div>
  )
}

export default SubFooter