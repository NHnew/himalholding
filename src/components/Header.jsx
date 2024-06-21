import React, { useEffect, useState } from 'react';
import '../sass/Header.sass';
import Logo from '../assets/himal-logo-white.png';
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { HiMiniArrowRight } from "react-icons/hi2";
import { TfiClose } from "react-icons/tfi";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [lang, setLang] = useState(false);

    useEffect(() => {
        if (toggleMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [toggleMenu]);

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu);
    };

    const toggleLang = () => {
        setLang(!lang);
    };

    const handleLinkClick = () => {
        if (toggleMenu) {
            handleMenuToggle();
        }
    };

    const menuItems = [
        { to: "/", label: "Ana Səhifə" },
        { to: "/about", label: "Haqqımızda" },
        { to: "/services", label: "Fəaliyyət Sahələri" },
        { to: "/hr", label: "İnsan Resursları" },
        { to: "/news", label: "Xəbərlər" }
    ];


    const scrollTopFunc = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='leftHeader d-flex align-items-center'>
                                    <div className="logo">
                                        <Link to="/" className='link' onClick={scrollTopFunc}>
                                            <div className="imgbox">
                                                <img className='logoImg' src={Logo} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={`menu d-flex ${toggleMenu ? 'active' : ''}`}>
                                        <div className='menuTop'>
                                            {menuItems.map(item => (
                                                <Link
                                                    key={item.to}
                                                    className='link d-flex align-items-center'
                                                    to={item.to}
                                                    onClick={handleLinkClick}
                                                >
                                                    <div>{item.label}</div>
                                                    <div className='menuRightArrow'>
                                                        <HiMiniArrowRight />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className='menuBottom'>
                                            <div className="lang d-flex align-items-center">
                                                <div onClick={toggleLang} className='language m-2 fs-6'>{lang ? "EN" : "AZ"}</div>
                                                <IoLanguageOutline className='fs-3' />
                                            </div>
                                            <div className="contact d-flex align-items-center">
                                                <Link className='link me-2' to="/contact" onClick={handleLinkClick}>Əlaqə</Link>
                                                <FaPhoneAlt />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rightHeader d-flex align-items-center'>
                                    <div className="lang d-flex align-items-center">
                                        <div onClick={toggleLang} className='m-2 fs-6'>{lang ? "AZ" : "EN"}</div>
                                        <IoLanguageOutline className='fs-4' />
                                    </div>
                                    <div className="contact d-flex align-items-center">
                                        <Link className='link me-2' to="/contact" onClick={handleLinkClick}>Əlaqə</Link>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="hamburgerMenuIcon" onClick={handleMenuToggle}>
                                        {toggleMenu ? <TfiClose /> : <VscMenu />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
