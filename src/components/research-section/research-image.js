import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

import "./style.scss";

const ResearchImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "research-landing-section.png" }
      ) {
        ...fluidImage
      }
    }
  `);

  return (
    <div className="card-section-image">
      <FluidImage data={data} />
    </div>
  );
};

export default ResearchImage;
