import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return <div className="footer">
        <footer>
            <p>DEV@Deakin 2022</p>
            <Link to='/privacy'>
                Privacy Policy
            </Link>
            <Link to='/terms'>
                Terms
            </Link>
            <Link to='/coc'>
                Code of Conduct
            </Link>
            <Outlet />
        </footer>
    </div>
}

export default Footer;