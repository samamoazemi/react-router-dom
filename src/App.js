import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUs} />
    </BrowserRouter>
  );
}

export default App;
