import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import "./style.scss";

const CivicImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "civic-media-logo-black.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="civic-image">
      <a
        href="https://www.media.mit.edu/groups/civic-media/overview/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </a>
    </div>
  );
};

export default CivicImage;
