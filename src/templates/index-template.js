import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import HeroBanner from '../components/HeroBanner';

const HomePage = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  const { html } = data.markdownRemark;

  return (
    <Layout title={title}>
      <HeroBanner />
      <Intro dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
  display: block;
  position: fixed;
  top: 34rem;
  flex-direction: column;
  max-width: 60ch;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: center;
  z-index: 1;
  & p {
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  h1 {
    color: darkgray;
  }
  @media screen and (max-width: 850px) {
    position: fixed;
    top: 300px;
    h1 {
      font-size: var(--size-400);
      color: darkgray;
    }
  }

  @media screen and (max-width: 600px) {
    position: fixed;
    top: 250px;
    left: 10%;
    h1 {
      font-size: var(--size-400);
      color: darkgray;
    }

    
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
