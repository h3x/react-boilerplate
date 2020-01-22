// JSX
const appRoot = document.getElementById("app")

const app = {
  title: "Indecision App",
  subtitle: "Put your hands in the life of a computer!",
  options: []
}

const submitForm = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option) { app.options.push(option); }

  console.log(app.options);
  e.target.elements.option.value = '';
  renderApp();
}

const resetOptions = () => { 
  while(app.options.length > 0){
    app.options.pop()
  }
  renderApp();
}

const onMakeDecision = () => {
  const randIndex = Math.floor(Math.random() * app.options.length)
  alert(app.options[randIndex])
}

const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options:" : "No Options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={resetOptions}>Remove All</button>
      { app.options.length > 0 && 
        <ol>
          {app.options.map(item => <li key={Math.random()}>{item}</li>)}
        </ol> 
      }

      <form onSubmit={submitForm}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template,appRoot);
}

renderApp()