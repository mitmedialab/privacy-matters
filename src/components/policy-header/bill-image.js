import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const BillImage = props => {
  const { policy } = props;
  const data = useStaticQuery(graphql`
    query {
      copra: file(relativePath: { eq: "bill-copra.png" }) {
        ...billImage
      }
      smart: file(relativePath: { eq: "bill-smart.png" }) {
        ...billImage
      }
      opa: file(relativePath: { eq: "bill-opa.png" }) {
        ...billImage
      }
    }
  `);

  return <Img fluid={data[policy].childImageSharp.fluid} alt="" />;
};

export const billImage = graphql`
  fragment billImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export default BillImage;
