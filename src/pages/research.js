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
import DownloadReport from "../components/download-report";

const ResearchPage = () => {
  return (
    <>
      <SEO />
      <div className="privacy-page">
        <NavBar showHome />
        <DownloadResearch />
        <Layout>
          <Row>
            <Col md={6} className="mb-3">
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
              <p>Our research was framed around three key questions:</p>
              <ol>
                <li>
                  How do various roles use and think about privacy in their
                  fields?
                </li>
                <li>
                  Based on a variety of backgrounds, what are the strengths and
                  challenges of the privacy bills and prototypes?
                </li>
                <li>
                  What are the perceptions of privacy and technology
                  practitioners on proposed legislation aimed at modifying
                  social media design?
                </li>
              </ol>
              <p>
                Our full report contains in-depth findings and analyses around
                these research questions, as well as recommendations and
                insights for policymakers and industry practitioners working in
                privacy-related spaces.
              </p>
              <div>
                <DownloadReport report="fullReport" />
              </div>
              <div>
                <DownloadReport report="summary" />
              </div>
            </Col>
            <Col md={6}>
              <CalloutCard flush title="Who we talked to">
                <p>
                  We interviewed 41 people from different industries and
                  backgrounds, including:
                </p>
                <ul>
                  <li>8 academics</li>
                  <li>8 nonprofits + advocacy organizations</li>
                  <li>8 industry practitioners</li>
                  <li>6 members of the public</li>
                  <li>5 lawyers</li>
                  <li>3 government employees</li>
                  <li>3 policy researchers</li>
                </ul>
              </CalloutCard>
            </Col>
          </Row>
        </Layout>
        <CardSection buffer>
          <Row className="justify-content-end">
            <Col md={5}>
              <div className="p-2">
                <Card className="p-5">
                  <h2>
                    <span className="half-highlight">Our recommendations</span>
                  </h2>
                  <p className="pt-2 pb-3 subheading-2">
                    Based on our interviewees and research process, we came up
                    with some recommendations for policymakers and industry
                    practitioners.
                  </p>
                </Card>
              </div>
            </Col>
          </Row>
        </CardSection>
        <Layout>
          <Row>
            <Col md={6} className="learnings">
              <h2>
                <span className="half-highlight">Some things we recommend</span>
              </h2>
              <dl>
                <dt>Develop shared privacy language across industries.</dt>
                <dd>
                  This could assist in identifying overlapping processes,
                  concerns, interests, and harms, as well as enable better
                  collaborations between individuals from different
                  sectors/professions.
                </dd>
              </dl>

              <dl>
                <dt>
                  Include insights from people from marginalized communities and
                  data stewards.
                </dt>
                <dd>
                  It’s important and valuable to talk to those who know or have
                  a good understanding of how they have been impacted by these
                  systems & policies.
                </dd>
              </dl>

              <dl>
                <dt>
                  Implement human-centered practices in the policy design
                  process.
                </dt>
                <dd>
                  Practices that could aid the policy design process include
                  broadening engagement with industry practitioners, visualizing
                  policies to prototypes when possible, exploring how to test
                  policy and prototyping processes on a larger scale, and
                  continuously integrating feedback.
                </dd>
              </dl>

              <p>
                Our 1-pager contains our full set of recommendations for
                policymakers and industry practitioners.
              </p>

              <DownloadReport report="onePager" />
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
        <CardSection buffer>
          <Row>
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
        <Layout footer>
          <Row className="justify-content-between mb-5">
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

              <h2>
                <span className="half-highlight">
                  Creating a prototyping guide
                </span>
              </h2>
              <p>
                We created a policy prototyping guide that outlines the process
                we used to prototype bills and gather feedback. The guide
                includes a high level diagram of the process, team role
                outlines, and a step-by-step framework on how to execute the
                prototyping process.
              </p>
              <DownloadReport report="prototypingGuide" />
            </Col>
          </Row>
        </Layout>
      </div>
    </>
  );
};

export default ResearchPage;
