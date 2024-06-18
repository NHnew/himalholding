import React, { useState } from 'react';
import '../sass/Header.sass';
import Logo from '../assets/himal-logo-white.png';
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { HiMiniArrowRight } from "react-icons/hi2";






const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuToggle = () => {
        setToggleMenu(!toggleMenu);
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
                                        <Link to="/" className='link'>
                                            <div className="imgbox">
                                                <img className='logoImg' src={Logo} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={`menu d-flex ${toggleMenu ? 'active' : ''}`}>
                                        <Link className='link d-flex align-items-center' to="/">
                                            <div>
                                                Ana Səhifə
                                            </div>
                                            <div className='menuRightArrow'>
                                                <HiMiniArrowRight />
                                            </div>
                                        </Link>
                                        <Link className='link d-flex align-items-center' to="/about">
                                            <div>
                                                Haqqımızda
                                            </div>
                                            <div className='menuRightArrow'>
                                                <HiMiniArrowRight />
                                            </div>
                                        </Link>
                                        <Link className='link d-flex align-items-center' to="/services">
                                            <div>
                                                Fəaliyyət Sahələri
                                            </div>
                                            <div className='menuRightArrow'>
                                                <HiMiniArrowRight />
                                            </div>
                                        </Link>
                                        <Link className='link d-flex align-items-center' to="/hr">
                                            <div>
                                                İnsan Resursları
                                            </div>
                                            <div className='menuRightArrow'>
                                                <HiMiniArrowRight />
                                            </div>
                                        </Link>
                                        <Link className='link d-flex align-items-center' to="/news">
                                            <div>
                                                Xəbərlər
                                            </div>
                                            <div className='menuRightArrow'>
                                                <HiMiniArrowRight />
                                            </div>
                                        </Link>
                                        <div className="lang d-flex align-items-center">
                                            <div className='language m-2 fs-6'>EN</div>
                                            <IoLanguageOutline className='fs-4' />
                                        </div>
                                        <div className="contact d-flex align-items-center">
                                            <Link className='link me-2' to="/contact">Əlaqə</Link>
                                            <FaPhoneAlt />
                                        </div>
                                    </div>
                                </div>
                                <div className='rightHeader d-flex align-items-center'>
                                    <div className="lang d-flex align-items-center">
                                        <div className='m-2 fs-6'>EN</div>
                                        <IoLanguageOutline className='fs-4' />
                                    </div>
                                    <div className="contact d-flex align-items-center">
                                        <Link className='link me-2' to="/contact">Əlaqə</Link>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="hamburgerMenuIcon" onClick={handleMenuToggle}>
                                        {toggleMenu ? <IoMdClose /> : <VscMenu />}
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