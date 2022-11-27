import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import BookNow from '../BookNow/BookNow';
import { useQuery } from '@tanstack/react-query';

const SingleCategory = ({ allCategory,setSelectCategory }) => {
    console.log(allCategory)
    const { category, name, picture, resalePrice, registered, orginialPrice, _id, location } = allCategory;
    
    return (
        <div className="card  shadow-xl border p-2 text">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body py-0 pt-2">
                <h2 className="card-title">
                    {category}
                    <div className="badge badge-secondary">Used</div>
                </h2>
                <p>{name}</p>
                <p>Original Price: {orginialPrice}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Registered: {registered}</p>
                <p>Location: {location} </p>
                <div className="card-actions justify-center">
                    <label onClick={()=>setSelectCategory(allCategory)} htmlFor="booking-modal" className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white">
                        Book Now
                    </label>
                   
                    <label className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white">
                        Reported
                    </label>
                   
                </div>
            </div>
           
        </div>
    );
};

export default SingleCategory;