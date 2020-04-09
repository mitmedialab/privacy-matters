import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const JasmineImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-jasmine.jpg" }) {
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

export default JasmineImg;
