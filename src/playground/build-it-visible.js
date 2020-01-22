class VisApp extends React.Component {
  constructor(props){
    super(props);
    this.toggleVis = this.toggleVis.bind(this);

    this.state = {
      vis: false
    }
  }

  toggleVis(){
    this.setState((prevState)=>{
      return {
        vis: !prevState.vis,
      };
    });
  }

  render(){
    return(
      <div>
        <h1>visibility toggle</h1>
          <button onClick={this.toggleVis}>{this.state.vis ? 'Hide Details' : 'Show Details'}</button>
          {this.state.vis && (
            <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
          )}
      </div>
    )
  }
}



ReactDOM.render(<VisApp />, document.getElementById('app'));

//************************************/


// let visibility = false;
// const toggleVis = () => {
//   visibility = !visibility;
//   render();
// }

// const render = () => {
//   const jsx = (
    // <div>
    // <h1>visibility toggle</h1>
    // <button onClick={toggleVis}>{visibility ? 'Hide Details' : 'Show Details'}</button>
    // {visibility && (
    //   <div>
    //     <p>Hey. These are some details you can now see!</p>
    //   </div>
    // )}
    // </div>
//   );
  
//   ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();