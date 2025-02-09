import React from 'react';
import styles from './Features.module.scss';
import img1 from '../../assets/Images/zero-touch.jpeg';
import img2 from '../../assets/Images/automation.jpeg';
import img3 from '../../assets/Images/remote-access.jpeg';
import img4 from '../../assets/Images/endpoint-security.jpeg';
import img5 from '../../assets/Images/integrations.jpeg';
import img6 from '../../assets/Images/app-management.jpeg';

const featureData = [
  {
    id: 1,
    title: "Zero-touch Enrollment",
    description: "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    image: img1,
    alt: "Zero touch enrolment with Hexnode UEM"
  },
  {
    id: 2,
    title: "Automation",
    description: "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
    image: img2,
    alt: "Automation illustration"
  },
  {
    id: 3,
    title: "Remote Access Management",
    description: "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    image: img3,
    alt: "Remote access management illustration"
  },
  {
    id: 4,
    title: "Endpoint Security and Compliance",
    description: "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes..",
    image: img4,
    alt: "Endpoint security illustration"
  },
  {
    id: 5,
    title: "Integrations",
    description: "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
    image: img5,
    alt: "Integrations illustration"
  },
  {
    id: 6,
    title: "App Management",
    description: "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    image: img6,
    alt: "App management illustration"
  }
];

const FeatureCard = ({ title, description, image, alt }) => (
  <div className={styles.featureCard}>
    <div className={styles.imageContainer}>
      <img 
        src={image} 
        alt={alt}
        loading="lazy"
        width={380}
        height={240}
        className={styles.image}
      />
    </div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
  </div>
);

const Features = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        Powerful endpoint management, built for the devices you choose
      </h1>
      <div className={styles.grid}>
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            alt={feature.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;