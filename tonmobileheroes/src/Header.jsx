import React from 'react';

const Header = () => {
    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const targetSection = document.querySelector(targetId);
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1>Mobile Heroes TON</h1>
                <nav className="nav-links">
                    <a href="#donate-section" onClick={(e) => handleNavClick(e, '#donate-section')}>Donate</a>
                    <a href="#donation-info-section" onClick={(e) => handleNavClick(e, '#donation-info-section')}>Donation Information</a>
                    <a href="#about-us-section" onClick={(e) => handleNavClick(e, '#about-us-section')}>Donate</a>
                    <a href="#contact-us-section" onClick={(e) => handleNavClick(e, '#contact-us-section')}>Contact Us</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
