import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            closeMenu();
        }
    }, []);

    return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
            <div>
                <img src="/img/TG_logo.png" alt="Logo of my name and surname" className='logo-nav-img' />
            </div>

            <button
                className={`nav-hamburger ${navActive ? "active" : ""}`}
                onClick={toggleNav}
            >
                <span className="nav-hamburger-line"></span>
                <span className="nav-hamburger-line"></span>
                <span className="nav-hamburger-line"></span>
            </button>

            <div className={`navbar-items ${navActive ? "active" : ""}`}>
                <ul>
                    {/* For scrolling within the page */}
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            to="heroSection"
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-content"
                        >
                            Home
                        </ScrollLink>
                    </li>

                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            to="MySkills"
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-content"
                        >
                            Skills
                        </ScrollLink>
                    </li>
                   
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            to="AboutMe"
                            activeClass="navbar-active-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-content"
                        >
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            onClick={closeMenu}
                            activeClass="navbar-active-content"
                            to="MyPortfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="navbar-content"
                        >
                            Portfolio
                        </ScrollLink>
                    </li>
                </ul>
            </div>

            {/* For routing to different pages */}
            <ScrollLink
                onClick={closeMenu}
                activeClass="navbar-active-content"
                to="ContactMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline-primary"
            >
                Contact
            </ScrollLink>
        </nav>
    );
}

export default NavBar;
