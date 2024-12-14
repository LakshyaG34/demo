import React, { useState } from "react";
import "./navbar.css";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = ()=>
  {
    setClick(!click);
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <AirplaneTicketIcon />
        <ul className = "nav-menu">
            <li>
                home
            </li>
            <li>
                about
            </li>
            <li>
                contact
            </li>
            <li>
                services
            </li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
