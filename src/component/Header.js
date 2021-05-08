
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
   
    return (
      <div>
        <header>
    <div className="container">
    <div className="row">
    <div className="col-md-4">
<div className="logo_header">
<img src="assets/img/logo.png" alt="logo" />
</div>
    </div>
    <div className="col-md-8">
<nav className="nav_gaction">
  <ul>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/forgot">Forgot</NavLink></li>
    <li><NavLink to="/setting">Setting</NavLink></li>
    <li><NavLink to="/signup">Login / Signup</NavLink></li>
    <div className="clear"></div>
  </ul>
</nav>
</div>
    </div>
    </div>
    </header>
    </div>
    );
  }
export default Header;