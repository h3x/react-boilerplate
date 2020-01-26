import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    subtitle: "Put your life in the hands of a computer"
  };

  handleDeleteOption = option => {
    this.setState(prevState => ({
      options: prevState.options.filter(p => p != option)
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handlePick = () => {
    const randIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randIndex];

    this.setState(() => ({ selectedOption: option }));
  };

  closeModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = option => {
    if (!option) {
      return "Enter Valid Value to Add Item";
    } else if (this.state.options.indexOf(option) >= 0) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem("options", JSON.stringify(this.state.options));
    }
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <div className="container">
          <Action
            hasOptions={!!this.state.options.length}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              deleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
