import React from 'react';

function Navbar() {
    return (
        <div class="container">
            <nav>
                <div class="header">
                    <div class="logo-box">
                        <h3 class="logo">UNDA <span>.Quest</span></h3>
                    </div>
                    <div class="menu-box">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Project</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </div>
                    <div class="signup-box">
                        <a class="signup-btn" href="#">Sign Up</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;