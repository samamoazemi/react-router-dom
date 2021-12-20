import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About-Us</Link>
          </li>
        </ul>
      </nav>
    </header>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
    </BrowserRouter>
  );
}

export default App;
