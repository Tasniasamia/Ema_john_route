import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img src="../../../public/Logo.svg"/></div>
            <div className='anchor'>
            <Link to="/">Shop</Link>
            <Link to="/Order">Order Review</Link>
            <Link to="/Manage">Manage Inventory</Link>
            <Link to="/Login">Login</Link>
            </div>
        </div>
    );
};

export default Header;