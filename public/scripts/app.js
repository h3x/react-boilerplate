"use strict";

// JSX
var appRoot = document.getElementById("app");

var app = {
  title: "Indecision App",
  subtitle: "Put your hands in the life of a computer!"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "list item 1"
    ),
    React.createElement(
      "li",
      null,
      "list item 2"
    ),
    React.createElement(
      "li",
      null,
      "list item 3"
    )
  )
);

ReactDOM.render(template, appRoot);
