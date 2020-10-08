import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const SlicemasterStyle = styled.div`
  .gatsby-image-wrapper {
    border-radius: 1rem;
  }
  h2 {
    display: inline-block;
    font-size: 6rem;
    margin-top: -2rem;
    position: relative;
    z-index: 2;
    transform: rotate(-2deg);
    padding: 1rem;
  }
  p {
    font-size: 3rem;
  }
`;

export default function SlicemasterPage({ data: { person } }) {
  return (
    <SlicemasterStyle className="center">
      <Img fluid={person.image.asset.fluid} />
      <h2 className="mark">{person.name}</h2>
      <p>{person.description}</p>
    </SlicemasterStyle>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
