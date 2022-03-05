import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/post/:id([0-9]+)?" element={<PostPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
