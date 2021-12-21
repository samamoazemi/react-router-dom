import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/profile" component={Profile} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
