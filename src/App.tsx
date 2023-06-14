import "./App.css";
import data from "./data.js";
import Blog from "./Blog.js";

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
      <Blog />
    </main>
  );
}

export default App;
