import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookNow from '../BookNow/BookNow';
import SingleCategory from './SingleCategory';

const SingleCategories = () => {
    const [selectCategory, setSelectCategory] = useState(null)
    const { id } = useParams()
    console.log(id)
    const { data: allCategories = [] } = useQuery({
        queryKey: ['allCategories'],
        queryFn: () => fetch(`https://assignment-12-server-psi.vercel.app/allCategories/${id}`)
            .then(res => res.json())
    })
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 mb-6'>
            {
                allCategories?.map(allCategory => <SingleCategory
                    setSelectCategory={setSelectCategory}
                    key={allCategory._id}
                    allCategory={allCategory}
                >
                </SingleCategory>)
            }
            {
                selectCategory &&
                <BookNow
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                ></BookNow>
            }

        </div >
    );
};

export default SingleCategories;