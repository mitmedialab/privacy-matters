import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PardisImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team-pardis.jpg" }) {
        ...profileImage
      }
    }
  `);

  return (
    <div className="jumbotron-image">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default PardisImg;