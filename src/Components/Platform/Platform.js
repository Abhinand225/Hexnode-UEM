/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styles from './Platform.module.scss';
import img1 from '../../assets/Images/android.jpeg'
import img2 from '../../assets/Images/iOS.jpeg'
import img3 from '../../assets/Images/macOS.jpeg'
import img4 from '../../assets/Images/windows.jpeg'
import img5 from '../../assets/Images/tvOS.jpeg'
import img6 from '../../assets/Images/fireOS.jpeg'

const Platform = () => {
  const [activePanel, setActivePanel] = useState('android');

  const platforms = [
    {
      id: 'android',
      title: 'Android',
      content: 'Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to it’s full capabilities.',
      image: img1
    },
    {
      id: 'ios',
      title: 'iOS',
      content: 'Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease. ',
      image: img2
    },
    {
      id: 'macos',
      title: 'macOS',
      content: 'Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.',
      image: img3
    },
    {
      id: 'windows',
      title: 'Windows',
      content: 'Spearhead modern PC management in your organization with Hexnode. Set limit’s and monitor PC health and compliance remotely with Hexnode UEM.',
      image: img4
    },
    {
      id: 'tvos',
      title: 'tvOS',
      content: 'Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.',
      image: img5
    },
    {
      id: 'fireos',
      title: 'FireOS',
      content: 'Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.',
      image: img6
    }
  ];

  const handlePanelClick = (platformId) => {
    setActivePanel(platformId);
  };

  return (
    <section className={styles.platformSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Multi-platform Endpoint Management</h1>
        <p className={styles.subtitle}>Devices of varying platforms? Our solution thrives in a diverse environment.</p>
        <div className={styles.content}>
          <div className={styles.imageSection}>
            <img
              src={platforms.find(p => p.id === activePanel)?.image}
              alt={`${activePanel} platform`}
              className={styles.platformImage}
              loading='lazy'
            />
          </div>
          <div className={styles.accordionSection}>
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className={`${styles.accordionItem} ${activePanel === platform.id ? styles.active : ''}`}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => handlePanelClick(platform.id)}
                  aria-expanded={activePanel === platform.id}
                >
                  <span>{platform.title}</span>
                </button>
                <div className={styles.accordionContent}>
                  <div className={styles.contentInner}>
                    <img
                      src={platform.image}
                      alt={`${platform.title} platform`}
                      className={styles.mobileImage}
                      loading='lazy'
                    />
                    <p>{platform.content}</p>
                    <p className={styles.link}><a href='#'>Try Hexnode on your endpoints</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;