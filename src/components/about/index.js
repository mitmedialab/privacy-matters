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
  const cardSpacing = "mb-1";
  return (
    <div id="about" className="about">
      <Row>
        <Col xs={12}>
          <h1 className="text-center">
            <span className="half-highlight">About</span>
          </h1>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-md-center">
        <Col xs={12} md={6}>
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
              affiliation="MIT Media Lab / Center for Civic Media"
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
              role="Research Contributor"
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
              .
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
              role="Research Lead"
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
              role="Project Lead"
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
            <span className="half-highlight">Advisory</span>
          </h2>
        </Col>
      </Row>

      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Sareeta Amrute"
              role="Director of Research"
              affiliation="Data & Society"
              additionalRole="Associate Professor"
              additionalAffiliation="University of Washington"
            />

            <AdvisorProfile
              name="Vanessa Barone"
              role="Senior Governance Analyst"
              affiliation="SageBionetworks"
            />

            <AdvisorProfile
              name="Lucy Bernholz"
              role="Director"
              affiliation="Digital Civil Society Lab"
              additionalRole="Sr. Research Scholar"
              additionalAffiliation="Stanford PACS"
            />
          </CardDeck>
        </Col>
      </Row>
      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Georgia Bullen"
              role="Executive Director"
              affiliation="Simply Secure"
              additionalRole="Chair of the Advisory Committee"
              additionalAffiliation="Measurement Lab"
            />

            <AdvisorProfile
              name="Emily Peterson Cassin"
              role="Digital Rights Advocate"
              affiliation="Public Citizen"
            />

            <AdvisorProfile
              name="Sage Cheng"
              role="Design and UX Lead"
              affiliation="Access Now"
            />
          </CardDeck>
        </Col>
      </Row>
      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Peter Dolanjski"
              role="Former Director of Privacy & Security Products"
              affiliation="Mozilla"
            />
            <AdvisorProfile
              name="Maria Filippelli"
              role="Public Interest Technology Census Fellow"
              affiliation="New America Foundation"
            />
            <AdvisorProfile
              name="Alex Gaynor"
              role="Security Engineer | Chief Information Security Officer"
              affiliation="Alloy"
            />
          </CardDeck>
        </Col>
      </Row>
      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Chris Gilliard"
              role="Writer & Professor"
              affiliation=""
            />
            <AdvisorProfile
              name="Devin Gladden"
              role="Manager, Federal Affairs (Energy & Technology)"
              affiliation="AAA National"
            />
            <AdvisorProfile
              name="Mason Kortz"
              role="Clinical Instructor"
              affiliation="Harvard Law School Cyberlaw Clinic"
            />
          </CardDeck>
        </Col>
      </Row>
      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Nonabah Lane"
              role="Member"
              affiliation="Navajo Nation"
              additionalRole="Sequoyah Fellow"
              additionalAffiliation="American Indian Science and Engineering Society (AISES)"
            />

            <AdvisorProfile
              name="Ilaria Liccardi"
              role="Research Scientist"
              affiliation="Internet Policy Research Initiative at MIT CSAIL"
            />
            <AdvisorProfile
              name="Janet Linder"
              role="Lawyer & Librarian"
              affiliation="Boston Public Library (Newton)"
            />
          </CardDeck>
        </Col>
      </Row>

      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Sydney Luken"
              role="Product Design and Digital Development Lead for Ethics Lab"
              affiliation="Georgetown University"
            />
            <AdvisorProfile
              name="Woody MacDuffie"
              role="Senior User Experience Designer"
              affiliation="Thinkering"
            />{" "}
            <AdvisorProfile
              name="Maria Moustaqim-Barrette"
              role="Pediatrician"
              affiliation="Boston Children’s Hospital"
            />
          </CardDeck>
        </Col>
      </Row>

      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Soraya Okuda"
              role="Education + Design Lead"
              affiliation="EFF"
            />
            <AdvisorProfile
              name="Najarian Peters"
              role="Faculty Fellow and Assistant Professor"
              affiliation="Institute for Privacy Protection, Seton Hall Law School"
            />{" "}
            <AdvisorProfile
              name="Charyti Reiter"
              role="Director of Programs"
              affiliation="On the Rise: safety, community, and advocacy for homeless and formerly-homeless women"
            />
          </CardDeck>
        </Col>
      </Row>

      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Vanessa Rhinesmith"
              role="Associate Research Director"
              affiliation="Technology and Social Change Project (TaSC), Shorenstein Center, Harvard Kennedy School"
            />

            <AdvisorProfile
              name="Becca Ricks"
              role="Researcher"
              affiliation="Mozilla Foundation"
            />

            <AdvisorProfile
              name="Aalok Shah"
              role="Product Manager"
              affiliation="Johns Hopkins University"
            />
          </CardDeck>
        </Col>
      </Row>

      <Row className={cardSpacing}>
        <Col xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Rob Simmons-Beck"
              role="Attending Internist"
              affiliation="Beth Israel Deaconess Medical Center"
            />
            <AdvisorProfile
              name="John Wilbanks"
              role="Chief Commons Officer"
              affiliation="Sage Bionetworks"
            />
            <AdvisorProfile
              name="Cherilyn Yazzie"
              role="Member"
              affiliation="Navajo Nation"
              additionalRole="Owner"
              additionalAffiliation="Coffee Pot Farms"
            />
          </CardDeck>
        </Col>
      </Row>

      <Row className="mb-5 pb-5">
        <Col sm={4} xs={12}>
          <CardDeck>
            <AdvisorProfile
              name="Ethan Zuckerman"
              role="Director"
              affiliation="Center for Civic Media at MIT"
              additionalRole="Associate Professor"
              additionalAffiliation="MIT Media Lab"
            />
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
};

export default About;
