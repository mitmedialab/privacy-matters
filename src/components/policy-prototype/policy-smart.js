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

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default PolicyPrototypeSmart;