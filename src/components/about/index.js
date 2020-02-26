import React from "react";
import { Col, Row } from "reactstrap";

import "./style.scss";

const About = props => {
  const { standAlone } = props;
  const aboutTitle = <span className="half-highlight">About</span>;
  return (
    <div id="about" className="about">
      <Row>
        <Col xs={12}>
          {standAlone && <h1>{aboutTitle}</h1>}
          {!standAlone && <h2>{aboutTitle}</h2>}
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={6}>
          <p className="subheading-2">
            Let’s Talk Privacy explores how the implementation of privacy and
            data governance policies might impact a variety of fields.
          </p>
          <p>
            There have been dozens of draft bills on privacy and data governance
            policies. How do these policies translate in practice? How they
            might affect us? We interviewed 41 people, including lawyers,
            designers, engineers, civil rights advocates, policymakers, and
            stewards of sensitive data: social workers, pediatricians,
            librarians. These conversations revealed 1) the diverse definitions
            and contexts of privacy 2) a variety of responses to recent data
            governance and privacy draft bills, and 3) the biggest
            privacy-related challenges (and possible ways to solve them) in
            different fields.
          </p>
          <p>
            We believe in transparency and in improving how we translate complex
            topics to the public. This project aims to better inform and engage
            everyday people -- the non-privacy related lawyers, technologists,
            researchers about some of the latest developments in policy. The
            project also aims to bring together cross-disciplinary insights to
            inform policymakers about how their bills can impact end users and
            people who manage sensitive data for a variety of marginalized and
            vulnerable communities.
          </p>
          <p>
            This research reflects only a small portion of the diverse
            perspectives we can bring to data governance and policy making. We
            hope to spur more conversations, reveal new insights, and prompt
            positive action.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
