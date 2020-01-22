class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      options: [],
      title: "Indecision",
      subtitle: "Put your life in the hands of a computer",
    };
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick(){
    const randIndex = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randIndex])
  }

  handleAddOption(option){
    if (!option){
      return 'Enter Valid Value to Add Item';
    }
    else if (this.state.options.indexOf(option) >= 0){
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} subtitle={this.state.subtitle}/>
        <Action hasOptions={!!this.state.options.length} handlePick={this.handlePick} />
        <Options options={this.state.options} deleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do</button>
      </div>
    
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {!!this.props.options.length && <button onClick={this.props.deleteOptions}>Remove All</button>}
        { this.props.options.map( option => <Option option={option} key={Math.random()}/> )}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>{this.props.option}</div>
    );
  }
}


class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this)

    this.state = {
      error: undefined
    }
  }

  submitForm(evt){
    evt.preventDefault();
    const option = evt.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option)

    evt.target.elements.option.value = '';

    this.setState(() => {
      return { error };  
      
    })
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

ReactDOM.render( <IndecisionApp />, document.getElementById('app'))