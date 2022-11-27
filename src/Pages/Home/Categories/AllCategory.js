import React from 'react';
import { Link } from 'react-router-dom';

const AllCategory = ({ category }) => {
    const { name, image, id } = category

    return (

        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center">
                    {name}
                </h2>
                <div className="card-actions ">
                    <Link to={`singlecategory/${id}`} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full">SHOW ITEM</Link>
                </div>
            </div>
        </div>

    );
};

export default AllCategory;