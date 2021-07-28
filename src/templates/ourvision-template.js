import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const OurVisionTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <OurVisionWrapper>

        <OurVisionCopy dangerouslySetInnerHTML={{ __html: html }} />
      </OurVisionWrapper>
    </Layout>
  );
};

export default OurVisionTemplate;

const OurVisionWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }

    & > * {
      margin-top: 2rem;
      width: 100%;
      text-align: left;
    }
    
    p {
    padding-bottom: 1rem;
  }
  }
`;

const OurVisionCopy = styled.div`
  max-width: 60ch;

  h1 {
    margin-bottom: 1rem;

  

  & p {
    font-size: var(--size-400);
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
