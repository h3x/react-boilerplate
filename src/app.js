// JSX
const appRoot = document.getElementById("app")

const app = {
  title: "Indecision App",
  subtitle: "Put your hands in the life of a computer!"
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ul>
      <li>list item 1</li>
      <li>list item 2</li>
      <li>list item 3</li>
    </ul>
  </div>
);


ReactDOM.render(template,appRoot);