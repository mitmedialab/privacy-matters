import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const TeamActionImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-in-action.png" }) {
        ...fluidImage
      }
    }
  `);

  return <FluidImage data={data} />;
};

export default TeamActionImage;
