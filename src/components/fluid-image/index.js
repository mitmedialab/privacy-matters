import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const FluidImage = props => {
  const { data, alt } = props;
  return (
    <Img
      alt={alt ? alt : ""}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export const FluidImageQuery = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default FluidImage;
