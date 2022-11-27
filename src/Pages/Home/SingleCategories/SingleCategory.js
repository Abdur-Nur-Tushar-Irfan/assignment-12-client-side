import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import BookNow from '../BookNow/BookNow';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const SingleCategory = ({ allCategory,setSelectCategory }) => {
    console.log(allCategory)
    const { category, name, picture, resalePrice, registered, orginialPrice, _id, location } = allCategory;
    const saveReportedItem=(allCategory)=>{
        const report={
            category:allCategory.category,
            name:allCategory.name,
            picture:allCategory.picture,
            resalePrice:allCategory.resalePrice,
            orginialPrice:allCategory.orginialPrice,
            location:allCategory.location
          
        }
        fetch('https://assignment-12-server-psi.vercel.app/reports',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(report)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            toast.success('You reported this item')
        })
        .catch(err=>console.err(err))

    }
    
    return (
        <div className="card  shadow-xl border p-2 text">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body py-0 pt-2">
                <h2 className="card-title">
                    {category}
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
                   
                    <label onClick={()=>saveReportedItem(allCategory)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full text-white">
                        Report
                    </label>
                   
                </div>
            </div>
           
        </div>
    );
};

export default SingleCategory;