import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const PardisImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-pardis.jpg" }) {
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

export default PardisImg;
