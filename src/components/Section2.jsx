import React from 'react';
import '../sass/Section2.sass';
import { Link } from 'react-router-dom';



const Section2 = () => {
    return (
        <section id='section2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="textbox">
                            <h2>Spotlight on Residential and Adaptive Reuse</h2>
                            <p>Whether designing new residences or transforming existing buildings, we take a human-centered approach to creating inspiring places to live.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="imgbox">
                            <img src="https://picsum.photos/900/500?random=5" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="textbox d-flex flex-column ms-4">
                            <span>Expertise</span>
                            <Link className='link' to='/residential'>Residential</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;