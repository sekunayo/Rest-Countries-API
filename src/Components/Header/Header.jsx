import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="header-box">
                <h2 className="header-heading">Where in the world?</h2>
                <div className="header-theme-switch">
                    <i className="fas fa-moon"></i>
                    <p>Dark Mode</p>
                </div>
            </div>
        </header>
    )
}

export default Header;
