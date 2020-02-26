import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PolicyPrototypeSmart = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "policy-smart-design.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Mockup for a hypothetical screenshot of a social media feed where one post is displayed at a time, along with a timer for long many likes a user has remaining before reseting, and the number of seconds left before the screen dims."
    />
  );
};

export default PolicyPrototypeSmart;
