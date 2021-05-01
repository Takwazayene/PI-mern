import {useEffect} from 'react'
import "../styles/HomeUser.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import { selectConnectuser, loginUserfind } from "../redux/slices/userSlice";
import { fetchUsers } from "../redux/slices/admin/usersSlice";
import {useDispatch ,useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Test from "./test";
import DashboardAdmin from "./admin/Dashboard"
import ProfileAdmin from "./admin/Profile"
import UsersAdmin from "./admin/Users"
import CompanyAdmin from "./admin/Company"
import DeliveryAdmin from "./admin/Delivery"
import claimsAdmin from   "./admin/takwa/Claims";
import UserscircuitAdmin from "./admin/Userscircuit"
import FreeDeliveries from "./admin/takwa/FreeDeliveries"
import ListAffectedTo from "./admin/takwa/listAffectedTo"
import Chart from "./admin/takwa/Chart"
import Chat from "./admin/takwa/chat/messenger"


import HomeCompany from './company/Home'
import ProfileCompany from './company/Profile'
import DeliveryManCompany from './company/DeliveryMan'
import VehicleCompany from './company/Vehicle'
import DeliveryCompany from './company/Delivery'
import HomeForUser from './user/Home'
import CompanyUser from './user/Company'
import ProfileUser from './user/Profile'
import DeliveryUser from './user/Delivery'
import ListDeliveryUser from './user/ListDelivery'
import MakeDeliveryUser from './user/MakeDelivery'
import StateDeliveryUser from './user/StateDelivery'
import VehicleShotUser from './user/VehicleShot'
import TakwaUser from './user/takwa'
import MenuBar from './chat/MenuBar'
import Post from './chat/Post'
import {Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SinglePost from './chat/SinglePost';
import MyPosts from './chat/MyPosts';
import ListFreeDelivery2 from "./user/freeDelivery/ListDeliveries2";
import EditDelivery from "./user/freeDelivery/editDelivery";
import addDelivery from "./user/freeDelivery/addDelivery";
import passedDelivery from   "./user/freeDelivery/PassedDelivery";
import chatbot from   "./user/chatbot/chatbot";
import simplechatbot from   "./user/simpleChatbot/chatbot";
import claims from   "./user/simpleChatbot/claims";
import claimsEspace from   "./user/Claim";
import AffectedDelivery from "./user/freeDelivery/affectedDelivery"





export default function HomeUser(props) {
  const [connectUser, error] = useSelector(selectConnectuser);
  const dispatch = useDispatch();
  

  useEffect( async()=>{
      if(Cookies.get('connect.sid') ){
        
      }else{
        await axios
       .get("http://localhost:5000/auth/logout", { withCredentials: true })
       .then((res) => {
             console.log(res)
             localStorage.removeItem("userInfo");
             dispatch(loginUserfind(res.data));
             props.history.push('/');
        } ) }
    
  },[Cookies.get()])

  useEffect(()=>{
    if(Cookies.get('connect.sid') ){
      if(connectUser.role === "admin"){
        dispatch(fetchUsers());
     }
    }
  
    
    
  },[dispatch])
  
  return (
    <>
      <BrowserRouter>
        <div className="row" id="homeuser">
          <div className="col-2 " style={{padding : 0}}>
            <Sidebar />
          </div>
          {connectUser.role ==="user" ? (
          <div className="col-9 " id="heigthHompage">
            <Switch>
              <Route path="/homeuser" exact component={HomeForUser} />
              <Route path="/homeuser/user/profile"  component={ProfileUser} />
              <Route path="/homeuser/user/company"  component={CompanyUser} />
              <Route path="/homeuser/user/delivery"  component={DeliveryUser} />
              <Route path="/homeuser/user/listdeliveryuser"  component={ListDeliveryUser} />
              <Route path="/homeuser/user/makedeliveryuser"  component={MakeDeliveryUser} />
              <Route path="/homeuser/user/statedeliveryuser"  component={StateDeliveryUser} />
              <Route path="/homeuser/user/vehicleshot"  component={VehicleShotUser} />
              <Route path="/homeuser/user/takwa"  component={TakwaUser} />
              <Route path="/homeuser/user/menuBar"  component={MenuBar} />
              
              <Route path="/homeuser/user/listDeliveries" component={ListFreeDelivery2} />
              <Route path="/homeuser/user/editDelivery/:id" component={EditDelivery} />
              <Route path="/homeuser/user/addDelivery" component={addDelivery} />
              <Route path="/homeuser/user/passedDelivery" component={passedDelivery} />
              <Route path="/homeuser/user/chatbot" component={chatbot} />
              <Route path="/homeuser/user/simplechatbot" component={simplechatbot} />
              <Route path="/homeuser/user/claims" component={claims} />
              <Route path="/homeuser/user/claimsEspace" component={claimsEspace} />
              <Route path="/homeuser/user/AffectedDelivery" component={AffectedDelivery} />
              <Route path="/homeuser/user/chat" component={Chat} />








              <Container>
                <MenuBar/>
              <Route path="/homeuser/user/post"  component={Post} />
              <Route path="/homeuser/user/posts/:id"  component={SinglePost} />
              <Route path="/homeuser/user/posts/myposts"  component={MyPosts} />

              </Container>


            </Switch>
          </div>):(<></>)} 
          {connectUser.role ==="admin" ? (
          <div className="col-9 " id="heigthHompage">
            <Switch>
              <Route path="/homeuser" exact component={DashboardAdmin} />
              <Route path="/homeuser/admin/profile" component={ProfileAdmin} />
              <Route path="/homeuser/admin/users" component={UsersAdmin} />
              <Route path="/homeuser/admin/company" component={CompanyAdmin} />
              <Route path="/homeuser/admin/delivery" component={DeliveryAdmin} />
              <Route path="/homeuser/admin/userscircuit" component={UserscircuitAdmin}/>
              <Route path="/homeuser/admin/listFreeDeliveries" component={FreeDeliveries}/>
              <Route path="/homeuser/admin/listClaims" component={claimsAdmin}/>
              <Route path="/homeuser/admin/listAffectedTo" component={ListAffectedTo}/>
              <Route path="/homeuser/admin/chart" component={Chart}/>
              <Route path="/homeuser/admin/chat" component={Chat}/>




            </Switch>
          </div>):(<></>)}
          {connectUser.role ==="company" ? (
          <div className="col-9 " id="heigthHompage">
            <Switch>
              <Route path="/homeuser" exact component={HomeCompany} />
              <Route path="/homuser/company/profile" component={ProfileCompany} />
              <Route path="/homuser/company/deliveryman" component={DeliveryManCompany} />
              <Route path="/homuser/company/vehicle" component={VehicleCompany} />
              <Route path="/homuser/company/delivery" component={DeliveryCompany} />
            </Switch>
          </div>):(<></>)}
        </div>
      </BrowserRouter>
    </>
  );
}
