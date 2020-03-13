import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Footer from "./footer";

import "./style.scss";

const MainContainer = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <div ref={ref}>
      <Container>{children}</Container>
    </div>
  );
});

const Layout = ({ children, backgroundClass, footer }) => {
  const containerRef = React.createRef();

  return (
    <div className={`${backgroundClass ? backgroundClass : ""}`}>
      <MainContainer ref={containerRef}>
        <main>{children}</main>
        {footer && <Footer />}
      </MainContainer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
