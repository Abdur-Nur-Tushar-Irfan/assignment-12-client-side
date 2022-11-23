import React from 'react';

const Banner = () => {
    return (
        <div className="hero " style={{ backgroundImage: `url("https://images.pexels.com/photos/2506947/pexels-photo-2506947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-20">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;