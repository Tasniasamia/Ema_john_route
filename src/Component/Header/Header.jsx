import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
            <img src="../../../public/Logo.svg"/></div>
            <div className='anchor'>
            <a href="#">Shop</a>
            <a href="#">Order Review</a>
            <a href="#">Manage Inventory</a>
            <a href="#">Login</a>
            </div>
        </div>
    );
};

export default Header;