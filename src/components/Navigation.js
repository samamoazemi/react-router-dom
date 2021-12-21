import { Link, NavLink, withRouter } from "react-router-dom"; 

const items =[
  {name: "Home", to: "/", exact: true},
  {name: "About-us", to: "/about-us"},
  {name: "Profile", to: "/profile"}
]

const Navigation = ({Location}) => {
    return ( 
        <nav>
          <ul>
            {items.map((item) => {
              return(
                <li>
                  <NavLink
                  to={item.to}
                  activeClassName="activeLink"
                  exact={item.exact || false}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            })} 
           </ul>
         </nav>
     );
}
 
export default withRouter(Navigation);