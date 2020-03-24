import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const JumbotronImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "landing-page-background.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

export default JumbotronImage;
