import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProduct = () => {
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
            .then(res => res.json())

    })
    const handleproductsDelete=(id)=>{
        const agree=window.confirm('are your sure you delete your product')
        if(agree){
            fetch(`http://localhost:5000/products/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('delete successfully')
                }
            })
        }
        

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6'>
            {
                products?.map(product => <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={product.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.category}</h2>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Year of Use: {product.year}</p>
                        <div className="card-actions justify-end">
                            <button onClick={()=>handleproductsDelete(product._id)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full">Delete</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyProduct;