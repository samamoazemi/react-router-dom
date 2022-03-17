import { useParams, NavLink } from "react-router-dom";

const items = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About-us", to: "/about-us" },
  { id: 3, name: "Profile", to: "/profile" },
  { id: 4, name: "Blogs", to: "/blogs" },
  { id: 5, name: "Post", to: "/post" },
];

const Navigation = () => {
  const params = useParams();

  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
