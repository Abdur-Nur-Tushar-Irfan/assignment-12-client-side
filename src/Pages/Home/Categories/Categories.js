import React from 'react';
import AllCategory from './AllCategory';

const Categories = () => {
    const categories = [
        {
            id: "01",
            name: "HP",
            image: "https://images.pexels.com/photos/13823992/pexels-photo-13823992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: "02",
            name: "DELL",
            image: "https://images.pexels.com/photos/1266982/pexels-photo-1266982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
        {
            id: "03",
            name: "LENOVO",
            image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

        },
    ]
    return (
        <div>
            <h1 className='text-center text-3xl mb-8 mt-8 font-bold'>PRODUCTS CATEGORY</h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 m-20 lg:grid-cols-3 gap-2'>
                { 
                    categories?.map(category => <AllCategory
                        key={category.id}
                        category={category}
                    >
                    </AllCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;