import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertices = () => {
    const { data: advertices = [] } = useQuery({
        queryKey: {},
        queryFn: () => fetch('http://localhost:5000/advertices')
            .then(res => res.json())
    })
    return (
        <div >
             <h1 className='text-center text-3xl mb-8 mt-8 font-bold'>ADVERTICE ITEMS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 m-10'>
                {advertices.length > 0 &&
                    advertices?.map(advertice => <div className="card w-full bg-base-100 shadow-xl image-full">
                        <figure><img src={advertice.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{advertice.category}</h2>
                            <p>Description {advertice.description}</p>
                            <p>Price: {advertice.Price}</p>
                            <p>Year: {advertice.Year}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Advertices;