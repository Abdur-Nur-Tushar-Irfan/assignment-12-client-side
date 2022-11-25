import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorpage from '../../assets/images/404_page_cover.jpg'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-6.png")` }}>
  <div className="hero-overlay"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     
      <Link to='/'><button  className="btn  mt-40">Go to Home Page</button></Link>
    </div>
  </div>
</div>
        // <div className='w-full'>
        //    <img className='' src={errorpage} alt=''/>

        // </div>
    );
};

export default ErrorPage;