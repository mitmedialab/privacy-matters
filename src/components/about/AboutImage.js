import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about-page-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="">
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
};

export default AboutImage;
