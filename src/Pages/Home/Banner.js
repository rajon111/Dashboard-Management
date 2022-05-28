import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/rsz_401[1].jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${ banner })`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Find Your Daily life tools in cheap Price and millions of other royalty Products, We are Always happy to serve you. Enjoy Your time with proper destination</p>
                    <Link to='/login'><button className="btn btn-primary">GET STARED</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;