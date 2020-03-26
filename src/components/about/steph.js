import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const StephImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-steph.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="jumbotron-image">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default StephImg;
