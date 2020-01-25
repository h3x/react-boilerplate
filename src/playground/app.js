class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: props.options,
      subtitle: "Put your life in the hands of a computer"
    };
  }

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

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(p => p != option)
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const randIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randIndex]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter Valid Value to Add Item";
    } else if (this.state.options.indexOf(option) >= 0) {
      return "This option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action
          hasOptions={!!this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
};

const Action = props => (
  <button onClick={props.handlePick} disabled={!props.hasOptions}>
    What should i do
  </button>
);

const Options = props => {
  return (
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
};

const Option = props => {
  return (
    <div>
      {props.option}
      <button onClick={e => props.handleDeleteOption(props.option)}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      error: undefined
    };
  }

  submitForm(evt) {
    evt.preventDefault();
    const option = evt.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    evt.target.elements.option.value = "";
    this.setState(() => ({ error }));
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitForm}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
