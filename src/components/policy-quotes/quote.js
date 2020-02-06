import React from "react";

const Quote = props => {
  const { frontmatter, html } = props.node;
  return (
    <blockquote className="blockquote text-center">
      <div className="display-1">🦊</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <footer className="blockquote-footer">{frontmatter.quotee}</footer>
    </blockquote>
  );
};

export default Quote;