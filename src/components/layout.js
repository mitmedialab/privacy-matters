import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Footer from "./footer";

const MainContainer = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref}>
      <Container>{children}</Container>
    </div>
  );
});

const Layout = ({ children }) => {
  const containerRef = React.createRef();

  return (
    <>
      <MainContainer ref={containerRef}>
        <main>{children}</main>
        <Footer />
      </MainContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
