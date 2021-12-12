import React from 'react';

// Styles Import
import './Header.styles.css';

const Header = () => {
    return (
        <>
        <header id='main-header'>
            <a href="#" id='logo'>WebFood</a>
            <nav>
                <ul>
                    <li>
                        <a href="#">Browse Meals</a>
                    </li>
                    <li>
                        <a href="#">My Orders</a>
                    </li>
                </ul>
            </nav>
            <a href="#side-drawer" className='menu-btn'>
                <span ></span>
                <span ></span>
                <span ></span>
            </a>
            </header>
            <aside id='side-drawer'>
                <header>
                <a href="#" className='menu-btn'>
                <span ></span>
                <span ></span>
                <span ></span>
            </a>
                </header>
            <nav>
            <ul>
                <li>
                    <a href="">Browse Meals</a>
                </li>
                <li>
                    <a href="#">My Orders</a>
                </li>
            </ul>
        </nav>
            </aside>
            </>
    )
};

export default Header;
