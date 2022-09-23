import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Header.css'

function Header ()
{
    return <div className="header-div">
        <Link to='/'>
            Home
        </Link>
        <Link to='/post'>
            Post
        </Link>
        <Link to='/login'>
            Login
        </Link>
        <input type="text" placeholder="Search.."></input>
        <Outlet />
        </div>
}

export default Header