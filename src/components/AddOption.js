import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  submitForm = evt => {
    evt.preventDefault();
    const option = evt.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    evt.target.elements.option.value = "";
    this.setState(() => ({ error }));
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitForm}>
          <input type="text" name="option" />
          <button className="button ">Add Option</button>
        </form>
      </div>
    );
  }
}
