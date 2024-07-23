import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`home-container`} style={{ backgroundPositionY: `${-scrollTop * 3}px` }}>
      <div className='home'> 
        <h1 className="home__title">Mountain Teams</h1>
        <p className="home__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan dolor a augue dapibus tristique. Fusce lobortis aliquam orci eget pharetra. Fusce elit felis, molestie et purus ut, auctor eleifend nunc. Sed egestas urna quis quam dignissim cursus. Praesent non enim rutrum enim molestie pharetra non at massa.
        </p>
      </div>
    </div>
  );
}

export default Home;
