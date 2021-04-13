import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function MenuBar() {
  //const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item 
      name="Posts"
       active ={activeItem==='Posts'} 
       onClick={handleItemClick}
       as = {Link}
       to="/homeuser/user/post"
       />
      <Menu.Menu position="right">
        <Menu.Item 
        name="My posts"
        active ={activeItem==='My posts'}
         onClick={handleItemClick} 
       as = {Link}
       to="/login"
      />
      <Menu.Item
        name="Profile"
        active={activeItem === 'Profile'}
        onClick={handleItemClick}
        as={Link}
        to="/register"
      />

    
      </Menu.Menu>
    </Menu>
  );

}

export default MenuBar;