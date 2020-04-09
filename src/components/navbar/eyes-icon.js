import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import FluidImage from "../fluid-image";

const EyesIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="eyes-icon">
      <FluidImage data={data} />
    </div>
  );
};

export default EyesIcon;
