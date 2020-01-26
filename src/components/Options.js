import React from "react";

import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      {!!props.options.length && (
        <button className="button button--link" onClick={props.deleteOptions}>
          Remove All
        </button>
      )}
    </div>

    {props.options.length == 0 && (
      <p className="widget__messages">Please add an option to get started!</p>
    )}
    {props.options.map((option, index) => (
      <Option
        option={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
        key={Math.random()}
      />
    ))}
  </div>
);

export default Options;
