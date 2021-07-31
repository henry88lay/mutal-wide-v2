import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const OurTeamTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <OurTeamWrapper>

        <OurTeamCopy dangerouslySetInnerHTML={{ __html: html }} />
      </OurTeamWrapper>
    </Layout>
  );
};

export default OurTeamTemplate;

const OurTeamWrapper = styled.div`
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

  h3 {
    margin-top: 2rem;
  }

  h2 {
    margin-bottom: 1rem;
  }

  ul {
    padding-left: 1rem;
    li {
      margin-bottom: 1rem;
    }
  }

  p {
    padding-bottom: 1rem;
  }
`;

const OurTeamCopy = styled.div`
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
