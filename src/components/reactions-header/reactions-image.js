import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const ReactionsImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "response-section.png" }) {
        ...fluidImage
      }
    }
  `);

  return <FluidImage data={data} />;
};

export default ReactionsImage;
