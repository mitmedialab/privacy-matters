import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default EyesIcon;
