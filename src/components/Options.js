import React from "react";

import Option from "./Option";

const Options = props => (
  <div>
    {!!props.options.length && (
      <button onClick={props.deleteOptions}>Remove All</button>
    )}
    {props.options.length == 0 && <p>Please add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        option={option}
        handleDeleteOption={props.handleDeleteOption}
        key={Math.random()}
      />
    ))}
  </div>
);

export default Options;
