import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PolicyPrototypeSmart = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "policy-online-privacy-design.png" }
      ) {
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
      alt="Mockup of a hypothetical screenshot where a social media feed is annotated with popups informing users what is tracked on a social media news feed with buttons to edit how long data can be retained."
    />
  );
};

export default PolicyPrototypeSmart;
