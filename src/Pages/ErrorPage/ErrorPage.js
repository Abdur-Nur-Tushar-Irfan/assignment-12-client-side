import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorpage from '../../assets/images/404_page_cover.jpg'

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='items-center'>
           <img src={errorpage} alt=''/>

        </div>
    );
};

export default ErrorPage;