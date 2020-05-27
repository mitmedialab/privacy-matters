import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const MediaLabLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "MIT_ML_Logo_K_RGB.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <FluidImage data={data} />;
};

export default MediaLabLogo;
