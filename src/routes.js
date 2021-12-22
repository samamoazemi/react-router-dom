import AboutUs from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";

const routes = [ 
    { path : "/blogs/:id", component : Blog},   
    { path : "/blogs", component : BlogPage},
    { path : "/profile", component : Profile},
    { path : "/about-us", component : AboutUs} ,
    { path : "/", component : HomePage, exact : true },
    {component: NotFound}
]

export default routes;