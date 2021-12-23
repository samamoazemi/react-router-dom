import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";
import SideBar from "../components/SideBar";

const Profile = () => {
    return ( 
        <>
          <p>Welcome to your profile !</p>
          <SideBar />
          <Route path="/profile/dashboard" component={Dashboard}/>
          <Route path="/profile/downloads" component={Downloads}/>
        </>
     );
}
 
export default Profile;