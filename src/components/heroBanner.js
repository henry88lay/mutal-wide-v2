import React from 'react';
import styled from 'styled-components';
import herobannerimage from '/Users/henrylay/code/henry88lay/mutual-wide-v2/src/components/heroBanner.jpg';

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
