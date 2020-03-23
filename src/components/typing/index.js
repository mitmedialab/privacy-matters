import React from "react";
import Typist from "react-typist";

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
          <span>
            {word}
            <Typist.Backspace count={word.length} delay={delay} />
          </span>
        );
        return component;
      })}
      {lastWord}
    </Typist>
  );
};

export default Typing;
