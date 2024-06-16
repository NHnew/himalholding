import React from 'react';
import '../sass/Header.sass';
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";



const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='leftHeader d-flex align-items-center'>
                                    <div className="logo fs-1">
                                        LOGO
                                    </div>
                                    <div className="menu">
                                        <Link className='link' to="/home">Ana Səhifə</Link>
                                        <Link className='link' to="/about">Haqqımızda</Link>
                                        <Link className='link' to="/services">Fəaliyyət Sahələri</Link>
                                        <Link className='link' to="/hr">İnsan Resursları</Link>
                                        <Link className='link' to="/news">Xəbərlər</Link>
                                    </div>
                                </div>
                                <div className='rightHeader d-flex align-items-center'>
                                    <div className="lang d-flex align-items-center">
                                        <div className='m-2 fs-5'>EN</div>
                                        <IoLanguageOutline className='fs-4' />
                                    </div>
                                    <div className="contact">
                                        <Link className='link' to="/contact">Əlaqə</Link>
                                        <FaPhone />
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