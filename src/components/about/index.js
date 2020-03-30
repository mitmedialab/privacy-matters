import React from "react";
import { Col, CardDeck, Row } from "reactstrap";

import AnnaImg from "./anna";
import DennisImg from "./dennis";
import StephImg from "./steph";
import PardisImg from "./pardis";
import JasmineImg from "./jasmine";
import TeamProfile from "./team-profile";
import AdvisorProfile from "./advisor-profile";

import "./style.scss";

const About = props => {
  return (
    <div id="about" className="about">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">
            <span className="half-highlight">About</span>
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} md={9}>
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

      <Row className="my-3">
        <Col xs={12}>
          <h2 className="text-center">
            <span className="half-highlight">Team</span>
          </h2>
        </Col>
        <Col xs={12} className="py-4">
          <CardDeck>
            <TeamProfile
              image={<AnnaImg />}
              name="Anna Chung"
              role="Designer"
              affiliation="MIT Center for Civic Media"
              website="https://www.annawchung.com/"
            >
              Anna is a UX designer and researcher at MIT’s Center for Civic
              Media. She has designed tools and visualizations for several
              social impact organizations, including the Design Studio for
              Social Intervention, Anti-Eviction Mapping Project, and 1001
              Stories. She is passionate about using technology and design for
              public good.
            </TeamProfile>

            <TeamProfile
              image={<DennisImg />}
              name="Dennis Jen"
              role="Lead Developer"
              affiliation="MIT Center for Civic Media"
              website="http://www.dennisjen.com"
            >
              Dennis is a software developer at MIT's Center for Civic Media. He
              has an extensive background in building web application and
              visualization tools across a variety of industries, including
              genetics, oncology, neuroscience, and education technology. At the
              Center for Civic Media, he applies this background to developing
              technology for social good. When not hunched over a keyboard, he's
              often hunched over a pottery wheel or piano.
            </TeamProfile>

            <TeamProfile
              image={<PardisImg />}
              name="Pardis Emami Naeni"
              role="PhD candidate"
              affiliation="Carnegie Mellon University"
              website="https://www.cs.cmu.edu/~pemamina"
            >
              Pardis is a final year PhD candidate of computer science at
              Carnegie Mellon University, where she is advised by Lorrie Cranor
              and Yuvraj Agarwal. Pardis is passionate about building usable
              tools to help people protect their privacy and security when
              interacting with Internet of Things (IoT) devices. During her PhD,
              Pardis developed a usable privacy and security label for smart
              devices to inform consumers’ IoT related purchase decisions. More
              information on this project can be found here:{" "}
              <a
                href="http://www.iotsecurityprivacy.org"
                rel="noopener noreferrer"
                target="_blank"
              >
                www.iotsecurityprivacy.org
              </a>
            </TeamProfile>
          </CardDeck>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={8} xs={12}>
          <CardDeck>
            <TeamProfile
              image={<JasmineImg />}
              name="Jasmine McNealy"
              role="Associate Professor"
              affiliation="University of Florida"
              website="http://jasminemcnealy.com"
            >
              Jasmine is an Associate Professor of Telecommunication at the
              University of Florida, where she teaches courses on regulation.
              She researches media, technology, and law with an emphasis on
              privacy, surveillance and data governance. She is also the
              Associate Director of the Marion B. Brechner First Amendment
              Project at UF, and a Faculty Associate at Harvard University’s
              Berkman Klein Center for Internet & Society.
            </TeamProfile>
            <TeamProfile
              image={<StephImg />}
              name="Stephanie Nguyen"
              role="Research Scientist"
              affiliation="MIT Media Lab / Center for Civic Media"
              website="https://www.stephanienguyen.co/"
            >
              Stephanie is a research scientist and human-computer interaction
              designer focused on understanding data privacy perceptions and
              improving user rights and experiences through design and policy
              for youth and vulnerable populations. She is an Advisory Member
              for IEEE's Advisory on Children's and Youth Experiences Ecosystem
              Committee and her research focuses on translating policy to
              practice by collaborating across policy, industry, and advocacy to
              reimagine meaningful choice and control in sharing personal data.
              She previously led design for government agencies at U.S. Digital
              Service at the Obama White House.
            </TeamProfile>
          </CardDeck>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <h2 className="text-center">
            <span className="half-highlight">Advisors</span>
          </h2>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              image={<StephImg />}
              name="Ethan Zuckerman"
              role="Director"
              affiliation="MIT Media Lab / Center for Civic Media"
            />
            <AdvisorProfile
              image={<StephImg />}
              name="Emily Peterson Cassin"
              role="TBD"
              affiliation="Public Citizen"
            />
            <AdvisorProfile
              image={<StephImg />}
              name="Najarian Peters"
              role="TBD"
              affiliation="Seton Hall"
            />
          </CardDeck>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={4} xs={12}>
          <CardDeck>
            <AdvisorProfile
              image={<StephImg />}
              name="Sydney Luken"
              role="TBD"
              affiliation="Georgetown Ethics Lab"
            />
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
};

export default About;
