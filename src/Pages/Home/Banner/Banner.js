import React from 'react';

const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url("https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-20">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Shop online for wholesale second hand laptop? Global Sources has a full-scale list of wholesale second hand laptop products at factory prices featured by verified</p>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
       
    );
};

export default Banner;