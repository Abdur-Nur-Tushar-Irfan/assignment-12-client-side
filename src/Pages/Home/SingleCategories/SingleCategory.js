import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

const SingleCategory = ({ allCategory }) => {
    console.log(allCategory)
    const {category,name,picture,resalePrice,registered,orginialPrice,_id }=allCategory;
    return (
        <div className="card  shadow-xl border">
            <figure><img  src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {category}
                    <div className="badge badge-secondary">Used</div>
                </h2>
                <p>{name}</p>
                <p>Original Price: {orginialPrice}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Registered: {registered}</p>
                <div className="card-actions justify-start">
                    <Link to={`/wishlist/${_id}`} className="badge badge-outline"><FcLike></FcLike> Wishlist</Link>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default SingleCategory;