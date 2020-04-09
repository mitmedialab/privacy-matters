import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BillImage = props => {
  const { policy } = props;
  const data = useStaticQuery(graphql`
    query {
      copra: file(relativePath: { eq: "bill-copra.png" }) {
        ...fluidImage
      }
      smart: file(relativePath: { eq: "bill-smart.png" }) {
        ...fluidImage
      }
      opa: file(relativePath: { eq: "bill-opa.png" }) {
        ...fluidImage
      }
    }
  `);

  return <Img fluid={data[policy].childImageSharp.fluid} alt="" />;
};

export default BillImage;
