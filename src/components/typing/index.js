import React from "react";
import Typist from "react-typist";

import "./style.scss";

const Typing = props => {
  const { prepend, words } = props;
  let midWords = [...words];
  const lastWord = midWords.pop();
  const delay = 1000;
  return (
    <Typist cursor={{ hideWhenDone: true }}>
      {`${prepend} `}
      {midWords.map(word => {
        const component = (
          <span className="typing">
            {word}
            <Typist.Backspace count={word.length} delay={delay} />
          </span>
        );
        return component;
      })}
      <span className="typing">{lastWord}</span>
    </Typist>
  );
};

export default Typing;
