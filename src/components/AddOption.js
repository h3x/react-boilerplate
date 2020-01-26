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
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.submitForm}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button button__add-option">Add Option</button>
        </form>
      </div>
    );
  }
}
