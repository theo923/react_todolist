import React from "react";

import TodoStore from "./TodoStore";

export default class Todo extends React.Component {
  constructor () {
    super();
    this.state = {
      check: true
    };
  }

  checkBox_Test = (id) => {
    this.setState((prevState) => ({ check: !prevState.check }));
  }

  render() {
    const { complete, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
        <span><input type="checkbox" onChange={ this.checkBox_Test } value={ this.state.check } /></span>
      </li>
    );
  }
}