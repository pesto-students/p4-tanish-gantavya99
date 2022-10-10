import React from 'react';
import heroimg from '../images/sapien1.svg';
const Hero = () => {
  return (
    <div className="container">
      <div className="hero">
      <h1 className="title">
            Making the Web Tiny For You!
        </h1>
        <h2 className="title-2">Increase your Web Application's Performance using Tiny.ai</h2>
      </div>
      <div><img src={heroimg} className="hero-image"/></div>
        </div>
  )
}

export default Hero