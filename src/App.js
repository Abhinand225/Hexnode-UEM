import { useEffect, useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Customers from './Components/Customers/Customers';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Platform from './Components/Platform/Platform';
import SubFooter from './Components/SubFooter/SubFooter';

function App() {

  const [showHeaderButton, setShowHeaderButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.getElementById("banner-section");
      if (bannerElement) {
        const bannerBottom = bannerElement.getBoundingClientRect().bottom;
        setShowHeaderButton(bannerBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header showButton={showHeaderButton} />
      <Banner />
      <About />
      <Features />
      <Platform />
      <Customers />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
