import React from 'react';

// Styles Import
import './Header.styles.css';

const Header = () => {
    return (
        <header id='main-header'>
            <a  href="#" id='logo'>WebFood</a>
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
        </header>
    )
}

export default Header;
