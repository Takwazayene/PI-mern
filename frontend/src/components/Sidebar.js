import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { selectConnectuser } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [connectUser, error] = useSelector(selectConnectuser);

  return (
    <>
      {connectUser.role === "user" ? (
        <div id="bodysidebar">
          <div className="navigation">
            <ul>
              <li>
                <NavLink exact to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Home</span>
                </NavLink >
              </li>
              <li>
                <NavLink to="/homeuser/user/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/company">
                  <span className="icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="title">Company</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/vehicleshot">
                  <span className="icon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span className="title">Vehicle Shot</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/claimsEspace">
                  <span className="icon">
                  <i class="fa fa-file"></i>               
                  </span>
                  <span className="title">Claim</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/chat">
                  <span className="icon">
                  <i class="fa fa-comments"></i>          
                          </span>
                  <span className="title">Chat</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      {connectUser.role === "admin" ? (
        <div id="bodysidebar">
          <div className="navigation">
            <ul>
              <li>
                <NavLink exact to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/users">
                  <span className="icon">
                    <i className="fa fa-users"></i>
                  </span>
                  <span className="title">Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/company">
                  <span className="icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="title">Company</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </NavLink>
                
              </li>
              <li>
                <NavLink to="/homeuser/admin/listFreeDeliveries">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Free Delivery</span>
                </NavLink>

              </li>
              <li>
                <NavLink to="/homeuser/admin/listClaims">
                  <span className="icon">
                <i class="fa fa-file"></i>               
                 </span>
                  <span className="title">Claims</span>
                </NavLink>

              </li>
              
              <li>
                <NavLink to="/homeuser/admin/chart">
                  <span className="icon">
                  <i class="fa fa-circle"></i>
                                                     </span>
                  <span className="title">Chart</span>
                </NavLink>

              </li>   
              <li>
                <NavLink to="/homeuser/admin/chat">
                  <span className="icon">
                  <i class="fa fa-comments"></i>          
                                                     </span>
                  <span className="title">Chart</span>
                </NavLink>

              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      {connectUser.role === "company" ? (
        <div id="bodysidebar">
          <div className="navigation">
            <ul>
              <li>
                <NavLink exact to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homuser/company/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homuser/company/deliveryman">
                  <span className="icon">
                    <i className="fa fa-users"></i>
                  </span>
                  <span className="title">Delivery_Man</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homuser/company/vehicle">
                  <span className="icon">
                    <i className="fa fa-truck"></i>
                  </span>
                  <span className="title">Vehicle</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homuser/company/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
