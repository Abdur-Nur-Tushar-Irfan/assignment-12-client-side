import React from 'react';
import { Link } from 'react-router-dom';

const AllCategory = ({ category }) => {
    const { name, image,id } = category

    return (
        <div>
            <div className="card card-compact gap-6 shadow-xl border mb-5">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions ">
                        <Link to={`singlecategory/${id}`}className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full">{name}</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllCategory;