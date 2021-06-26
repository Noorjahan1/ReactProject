

import  './navabar.css';
import React from "react";
import {  
Link
} from "react-router-dom";

const Nav = () => {
    return (  
        <>
        <div className="menu">
        <ul className="navbar-link">
        
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/table1">Table 1</Link></li>
          <li><Link to="/Table2">Table 2</Link></li>
        </ul>
        </div>
        </>
    );
}
 
export default Nav;