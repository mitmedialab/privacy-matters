import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const JumbotronImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "landing-page-background.png" }
      ) {
        ...fluidImage
      }
    }
  `);

  return (
    <div className="jumbotron-image">
      <FluidImage data={data} />
    </div>
  );
};

export default JumbotronImage;
