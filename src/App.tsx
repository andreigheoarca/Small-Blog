import "./App.css";
import data from "./data.js";

function App() {
  console.log(data);
  return (
    <main>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Blog</li>
        </ul>
      </nav>
    </main>
  );
}

export default App;
