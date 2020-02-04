import React, { useState, useEffect } from "react";
import { Row, Col, Toast, ToastBody, ToastHeader, Button } from "reactstrap";

const scrollToSelected = () => {
  const invalidElements = document.getElementsByClassName('is-selected');
  let focusEl = invalidElements.length > 0 ? invalidElements[0] : undefined;
  if (focusEl) {
    focusEl.scrollIntoView({behavior: "smooth"} );
  }
}

const Annotation = props => {
  const { selectedAnnotation, title } = props;
  const selectedClass = "border border-warning is-selected";
  return (
    <div className="pt-2 pb-3">
      <Toast className={selectedAnnotation === title ? selectedClass : ""}>
        <ToastHeader>
          {`Simple Explaination: ${title}`}
        </ToastHeader>
        <ToastBody>
          Easy to understand plain language explaination. Yep yep.
        </ToastBody>
      </Toast>
    </div>
  );
}

const PolicySegment = props => {
  const { title, selectedAnnotation, setAnnotation } = props;
  return (
    <Button color="link" className={selectedAnnotation === title ? "selected-segment" : ""} onClick={e => setAnnotation(title)}>{title}</Button>
  );
}

const AboutContent = props => {
  const { frontmatter, html } = props.markdownRemark;
  const [selectedAnnotation, setAnnotation] = useState('');

  const titles = ["perspiciatis blah blah blah", "commodi", "eiusmod", "similique", "officiisk" ];

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    scrollToSelected();
  });

  return (
    <>
      <Row>
        <Col>
          <h2>{frontmatter.title}</h2>
        </Col>
      </Row>

      <Row className="">
        <Col xs={4} className="bill-text">
          <p>To prohibit social media companies from using practices that exploit human psychology or brain physiology to substantially impede freedom of choice, to require social media companies to take measures to mitigate the risks of internet addiction and psychological exploitation, and for other purposes.</p>
        </Col>
        <Col xs={1}>
          <div className="stripe h-100"></div>
        </Col>
        <Col xs={7}>
          <div className="callout">
            <Annotation title="Test" />
          </div>
        </Col>

        <Col xs={4} className="bill-text">
          <p>This Act may be cited as the ‘‘Social Media Addiction Reduction Technology Act’’ or the ‘‘SMART Act’’. </p>
        </Col>
        <Col xs={6}>
        </Col>

        <Col xs={4} className="bill-text">
          <p>The business model for many internet companies, especially social media companies, is to capture as much of their users’ attention as possible. </p>
        </Col>
        <Col xs={6}>
        </Col>

        <Col xs={4} className="bill-text">
          <p>Beginning 3 months after the date of enactment of this Act, it shall be unlawful for a social media company to operate a social media platform that uses any of the following practices: </p>
        </Col>
        <Col xs={6}>
        </Col>

        <Col xs={4} className="bill-text">
          <p>* INFINITE SCROLL OR AUTO REFILL.—The use of a process that automatically loads and displays additional content, other than music or video content that the user has prompted to play, when a user approaches or reaches the end of loaded content without requiring the user to specifically request (such as by pushing a button or clicking an icon, but not by simply continuing to scroll) that additional content be loaded and displayed.</p>
        </Col>
        <Col xs={1}>
          <div className="stripe h-100"></div>
        </Col>
        <Col xs={7}>
          <div className="callout">
            <Annotation title="Test" />
            <blockquote class="blockquote text-center">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer"><cite title="Source Title">Person 1</cite></footer>
            </blockquote>
            <div className="text-muted"><small>More Quotes: </small><Button color="link">Person 1</Button> · <Button color="link">Person 2</Button> · <Button color="link">Person 3</Button></div>
          </div>
        </Col>

      </Row>

      <Row className="py-5 scrollable-row">
        <Col xs={8} className="scrollable-col">
          <h3>The Bill in Its Entirety</h3>
          <p>Sed ut <PolicySegment selectedAnnotation={selectedAnnotation} setAnnotation={setAnnotation} title={titles[0]} /> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea <PolicySegment selectedAnnotation={selectedAnnotation} setAnnotation={setAnnotation} title={titles[1]} /> consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <PolicySegment selectedAnnotation={selectedAnnotation} setAnnotation={setAnnotation} title={titles[2]} /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, <PolicySegment selectedAnnotation={selectedAnnotation} setAnnotation={setAnnotation} title={titles[3]} /> sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut <PolicySegment selectedAnnotation={selectedAnnotation} setAnnotation={setAnnotation} title={titles[4]} /> debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </Col>
        <Col xs={4} className="scrollable-col">
          <h3>Simple Explainations and Quotes</h3>
          {titles.map(title => <Annotation title={title} selectedAnnotation={selectedAnnotation} />)}
        </Col>
      </Row>

      <Row>
        <Col>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Col>
      </Row>
    </>
  );
};

export default AboutContent;
