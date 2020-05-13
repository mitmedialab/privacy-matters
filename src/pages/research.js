import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Card, Row, Col } from "reactstrap";

import Layout from "../components/layout";
import NavBar from "../components/navbar";
import DownloadResearch from "../components/research-section/download-research";
import CardSection from "../components/card-section";
import CalloutCard from "../components/callout-card";
import SEO from "../components/seo";
import TeamActionImage from "../components/team-action-image";

const ResearchPage = () => {
  return (
    <>
      <SEO />
      <div className="privacy-page">
        <NavBar showHome />
        <DownloadResearch />
        <Layout>
          <Row>
            <Col md={6}>
              <h2>
                <span className="half-highlight">Background</span>
              </h2>
              <p>
                In this research, we focused on two key problems. First,
                operationalizing privacy policies into practice is nebulous and
                challenging. How do you translate, measure, and test values and
                high level aspirations into a user interface? Second, there is a
                natural silo between industries fortifying rare integration
                between industry, policy, and academic research.
              </p>
              <p>
                The first objective for this work was to explore intersections
                of privacy policy and design through visual prototypes. The
                second was to understand the challenges of translating policy to
                platform changes based on the specific background and industry
                skill set of the interviewees. Finally, we sought to understand
                broader user perspectives of privacy and control on social
                media.
              </p>
              <p>
                Our research was framed around three key questions:
                <ol>
                  <li>
                    How do various roles use and think about privacy in their
                    fields?
                  </li>
                  <li>
                    Based on a variety of backgrounds, what are the strengths
                    and challenges of the privacy bills and prototypes?
                  </li>
                  <li>
                    What are the perceptions of privacy and technology
                    practitioners on proposed legislation aimed at modifying
                    social media design?
                  </li>
                </ol>
              </p>
              <p>
                Our full report contains in-depth findings and analyses around
                these research questions, as well as recommendations and
                insights for policymakers and industry practitioners working in
                privacy-related spaces.
              </p>
            </Col>
            <Col md={6}>
              <CalloutCard flush title="Who we talked to">
                <p>
                  We interviewed 41 people from different industries and
                  backgrounds, including:
                  <ul>
                    <li>8 academics</li>
                    <li>8 nonprofits + advocacy organizations</li>
                    <li>8 industry practitioners</li>
                    <li>6 members of the public</li>
                    <li>5 lawyers</li>
                    <li>3 government employees</li>
                    <li>3 policy researchers</li>
                  </ul>
                </p>
              </CalloutCard>
            </Col>
          </Row>
        </Layout>
        <CardSection buffer>
          <Row className="justify-content-end">
            <Col md={5}>
              <Card className="p-5">
                <div className="p-2">
                  <h2>
                    <span className="half-highlight">Our process</span>
                  </h2>
                  <p className="pt-2 pb-3 subheading-2">
                    We summarized, created visual prototypes, and collected
                    feedback for three draft bills on online privacy and data
                    governance.
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </CardSection>
        <Layout>
          <Row className="justify-content-between">
            <Col md={6}>
              <div className="pb-4">
                <CalloutCard flush title="Our team in action">
                  <TeamActionImage />
                  <p>
                    Sketching mockup ideas during a website design sprint
                    session!
                  </p>
                </CalloutCard>
              </div>
            </Col>
            <Col md={6}>
              <h2>
                <span className="half-highlight">Selecting the bills</span>
              </h2>
              <p className="">
                Our team reviewed the latest public draft bills on online
                privacy and data governance from 2018 to 2020. We chose three
                bills to present and collect feedback on: the Social Media
                Addiction Reduction Technology Act, Online Privacy Act, and
                Consumer Online Privacy Rights Act. These bills were chosen
                based on our goals to represent a diversity of Senate teams, to
                show a variety of different policy levers, and to produce visual
                prototypes to illustrate the bills’ potential impacts.
              </p>
              <h2>
                <span className="half-highlight">Designing the prototypes</span>
              </h2>
              <p className="">
                After narrowing our focus to 3 bills, we brainstormed ways to
                visualize how online platforms might change if these bills were
                passed. Through lots of sketches and ideation sessions, we
                produced a speculative visual prototype for each bill, imagining
                what a social media platform might look like in response to each
                bill. We chose to represent social media platforms given their
                widespread reach and high engagement across the general public.
              </p>
              <h2>
                <span className="half-highlight">Conducting interviews</span>
              </h2>
              <p className="">
                We conducted 41 one-on-one interviews to gather insights around
                privacy and each of the individual bills. During the interviews,
                we showed participants a summary of each bill, visual examples
                to highlight the bill’s concepts, and our visual prototype for
                the bill. We probed into their reactions to the bills, aiming to
                identify what they saw as advantages and challenges for each. We
                also talked about privacy more broadly, asking participants how
                they viewed privacy both in their work and personal lives.
              </p>
            </Col>
          </Row>
        </Layout>
        <CardSection buffer>
          <Row>
            <Col md={5}>
              <div className="p-2">
                <Card className="p-5">
                  <h2>
                    <span className="half-highlight">Our takeaways</span>
                  </h2>
                  <p className="pt-2 pb-3 subheading-2">
                    We gained a lot of insights from our conversations with
                    privacy experts and non-experts alike. These are just a few
                    of the many things we learned!
                  </p>
                </Card>
              </div>
            </Col>
          </Row>
        </CardSection>
        <Layout footer>
          <Row>
            <Col md={6} className="learnings">
              <h2>
                <span className="half-highlight">
                  A few takeaways from our research
                </span>
              </h2>
              <dl>
                <dt>
                  Privacy research and policy can be strengthened with more
                  diverse perspectives, by reaching out to different communities
                  and inviting feedback.
                </dt>
                <dd>
                  Strategies like visual prototyping can help bridge the gap
                  between researchers and practitioners and enable policies to
                  be designed and tested. It is also important to include
                  insights from people from marginalized communities and data
                  stewards who know or have a good understanding of how they
                  have been impacted by these systems and policies.{" "}
                </dd>
              </dl>

              <dl>
                <dt>
                  Although we heard many similar definitions of privacy, the way
                  privacy is put into practice is shaped by the context.
                </dt>
                <dd>
                  The creation of a common language, or a set of phrases that
                  can be understood across all sectors may prove useful. Such a
                  lexicon could assist in identifying overlapping processes,
                  concern, interests, and harms, as well as enable better
                  collaborations between individuals from different sectors and
                  professions.
                </dd>
              </dl>

              <dl>
                <dt>
                  Policies balance power through a variety of levers and
                  mechanisms.{" "}
                </dt>
                <dd>
                  Policymakers have different perspectives through different
                  pieces of legislation. One bill would not be a comprehensive
                  solution to ensure privacy protections. We heard from several
                  law experts that there is the need for a more multi-layered
                  approach to privacy, where several different policies can work
                  cooperatively.
                </dd>
              </dl>

              <dl>
                <dt>
                  Policies provoke questions about how to improve existing
                  consent mechanisms.
                </dt>
                <dd>
                  The design practitioners we interviewed noted a few methods to
                  improve privacy policy consent: just-in-time features to
                  notify users of changes, improving “general settings”
                  modifications and focusing on “plain-language” with
                  straightforward wording so people understand what they’re
                  agreeing to.
                </dd>
              </dl>
            </Col>

            <Col md={6}>
              <CalloutCard flush title="What we heard">
                <blockquote className="blockquote">
                  <p>
                    “What we really need in privacy is an immune system. The
                    assumption is that everything gets through at least one part
                    of the immune system--what you really want is enough
                    interconnected layers so that it’s really hard to get
                    through all of them.”
                  </p>
                  <p>
                    - John Wilbanks, Chief Commons Officer at Sage Bionetworks
                  </p>
                </blockquote>
              </CalloutCard>
            </Col>
          </Row>
        </Layout>
      </div>
    </>
  );
};

export default ResearchPage;
