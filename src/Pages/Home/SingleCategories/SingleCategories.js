import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import SingleCategory from './SingleCategory';

const SingleCategories = () => {
    const {id}=useParams()
    console.log(id)
    const {data:allCategories=[]}=useQuery({
        queryKey:['allCategories'],
        queryFn:()=>fetch(`http://localhost:5000/allCategories/${id}`)
        .then(res=>res.json())
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {  
                allCategories?.map(allCategory=><SingleCategory 
                    key={allCategory._id}
                    allCategory={allCategory}
                >
                </SingleCategory>)
            }
            
        </div>
    );
};

export default SingleCategories;