import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
return (
<div className="nav container-fluid">
    <div className="">
        <NavLink to="/" className="text-white">Logo</NavLink>
    </div>
    <div className="nav-list">
        <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
        <NavLink exact activeClassName="active_class" to="/about">About</NavLink>
        <NavLink exact activeClassName="active_class" to="/user/im/saikot">User</NavLink>
        <NavLink exact activeClassName="active_class" to="/services">Services</NavLink>
        <NavLink exact activeClassName="active_class" to="/posts">Post</NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
    </div>
</div>
)
}

export default Navbar;