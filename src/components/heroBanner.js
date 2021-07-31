import React from 'react';
import styled from 'styled-components';
import herobannerimage from './src/components/hero-banner.jpg';

const heroBannerComponent = () => {
    return (
        <HeroBanner src={herobannerimage} />
    )
}

export default heroBannerComponent;

const HeroBanner = styled.img`
  height: 100%;
  width: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -1;

  @media screen and (max-width: 700px) {
    
  }
`;

const HeroBannerText = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`