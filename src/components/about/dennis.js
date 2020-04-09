import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const DennisImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-dennis.jpg" }) {
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

export default DennisImg;
