import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch(`http://localhost:5000/products?email=${user?.email}`,{
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

    })
    const handleproductsDelete = (id) => {
        const agree = window.confirm('are your sure you delete your product')
        if (agree) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                    }
                })
        }


    }
    const handleAdvertices=(product)=>{
        const saveAdvertiseItems={
            image:product.image,
            category:product.category,
            description:product.description,
            Price:product.price,
            Year:product.year
        }
        
        fetch(`http://localhost:5000/advertices`,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveAdvertiseItems)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        .catch(err=>console.err(err))
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6 border'>
            {  products.length>0 &&
                products?.map(product => <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={product.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product.category}</h2>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Year of Use: {product.year}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleproductsDelete(product._id)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full">Delete</button>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={()=>handleAdvertices(product)} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 w-full">Advertise</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default MyProduct;