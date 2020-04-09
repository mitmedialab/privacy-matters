import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const PolicyPrototypeSmart = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "policy-opa-design.png" }) {
        ...fluidImage
      }
    }
  `);

  return (
    <FluidImage
      data={data}
      alt="Mockup of a hypothetical screenshot where a social media feed is annotated with popups informing users what is tracked on a social media news feed with buttons to edit how long data can be retained."
    />
  );
};

export default PolicyPrototypeSmart;
