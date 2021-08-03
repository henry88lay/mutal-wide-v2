import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import BackgroundImage from "gatsby-background-image"

import "./background-image.css"

const HomePage = (props) => {

  return (
    <Layout>
      <BackgroundImage
        className="masthead"
        fluid={props.data.indexImage.childImageSharp.fluid}
      >
        <div className="black-overlay">
          <h4>
            Mutual Wide Corporation
          </h4>
        </div>
      </BackgroundImage>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    indexImage: file(relativePath: { regex: "/^heroBanner.jpg/" }) {
      childImageSharp { fluid(maxWidth: 1000) { ...GatsbyImageSharpFluid }
    }
  }}
`;