import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const AnnaImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-anna.jpg" }) {
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

export default AnnaImg;
