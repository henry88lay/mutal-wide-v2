import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const AboutTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>

        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>
    </Layout>
  );
};

export default AboutTemplate;

const AboutWrapper = styled.div`
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
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding-top: 0.5rem;
    padding-bottom: 1rem;
  }
`;

const AboutCopy = styled.div`
  max-width: 60ch;

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
