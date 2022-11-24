import React from 'react';
import { Link } from 'react-router-dom';

const AllCategory = ({ category }) => {
    const { name, image,id } = category

    return (
        <div>
            <div className="card card-compact gap-2 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions ">
                        <Link to={`singlecategory/${id}`}className="btn btn-primary w-full">{name}</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllCategory;