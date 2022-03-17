import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Blog from "./components/Blog";
import Layout from "./layout/Layout";
import AboutUs from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Dashboard from "./components/Dashboard";
import Downloads from "./components/Downloads";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/post/:id([0-9]+)?" element={<PostPage />} />
          <Route path="/profile/*" element={<Profile />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="downloads" element={<Downloads />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
