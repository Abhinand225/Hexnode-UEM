import React from 'react';
import sytles from './Customers.module.scss'
import Testimonials from './Testimonials/Testimonials';
import Companies from './Companies/Companies';

function Customers() {
  return (
    <section className={sytles.customersConatiner}>
      <h2>What our customers say</h2>
      <Testimonials/>
      <Companies/>
    </section>
  )
}

export default Customers