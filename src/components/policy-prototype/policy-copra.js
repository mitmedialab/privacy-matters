import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PolicyPrototypeSmart = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "policy-copra-design.png" }) {
        ...prototypeImage
      }
    }
  `);

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="Mockup of a screen with a table displaying the number of interactions a user had with a hypothetical website with the ability to edit when data will be deleted for each interactions type. Buttons also exist to download, delete, and transfer data to another platform."
    />
  );
};

export default PolicyPrototypeSmart;
