import axios from "axios";
import { useEffect, useState } from "react";
import "./chatOnline.css";
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser, } from "../../../../../redux/slices/userSlice";

export default function ChatOnline({onlineUsers,currentId, setCurrentChat }) {
  const [users, setUsers] = useState([]);
  const [onlineUsers2, setOnlineUsers2] = useState([]);
  const [connectUser, error] = useSelector(selectConnectuser);

 // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//onlineUsers:houma les users en ligne lkol(ema andhom ken userId w socketId)
//users:houma les users lkol bsifa 3ama
//onlineUsers2:les users en ligne lkol
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:5000/users/");
      setUsers(res.data);
    };

    getUsers();
  }, []); 

  useEffect(() => {
    //console.log(onlineUsers);
    //console.log(users);


    //mel les users lkol on va filter seulement elli en ligne
    setOnlineUsers2(users.filter((f) => onlineUsers.includes(f._id)));
    
  }, [users, onlineUsers]);

  console.log(onlineUsers2)

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/conversations/find/${currentId}/${user._id}`
      );
      console.log(res.data);
      if(res.data  == null) {
         const res = await axios.post(
          `http://localhost:5000/conversations/${currentId}/${user._id}`
        ); 
      }
      else {
        setCurrentChat(res.data);
       
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {users.map((o)=> (   //users:yatl3ouli les users lkol 
                           //ken nehb ytl3ouli ken users  eli en ligne  f3oudh users nektb onlineUsers2
   
      
        <div className="chatOnlineFriend" onClick={()=>{handleClick(o)}} >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://www.forceplus.com/wp-content/uploads/2016/09/avatar.png"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o.username}</span>
        </div>
     ))}
    </div>
  );
}
