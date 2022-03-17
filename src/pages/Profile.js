import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";
import SideBar from "../components/SideBar";
import { Outlet, useNavigate } from "react-router";

const Profile = () => {
  // click a button => !!!
  // const history = useHistory();
  const navigate = useNavigate();
  navigate("/blogs");

  return (
    <>
      <p>Welcome to your profile !</p>
      <div>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Profile;
