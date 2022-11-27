import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const AddProduct = () => {
    const navigate = useNavigate()
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_Image_apiKey//imagebb key
    const handleAddProduct = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const products = {
                        email:data.email,
                        name: data.name,
                        price: data.price,
                        number: data.number,
                        location: data.location,
                        category: data.category,
                        description: data.description,
                        year: data.year,
                        image: imgData.data.url
                    }
                    fetch('http://localhost:5000/products',{
                        method:'POST',
                        headers:{
                            'content-type':'application/json',
                            
                        },
                        body:JSON.stringify(products)
                        
                    })
                   .then(res=>res.json())
                   .then(result=>{
                    toast.success('Products added succesfull')
                    navigate('/dashboard/myProduct')
                   })

                }
            })
    }
    return (
        <form onSubmit={handleSubmit(handleAddProduct)} className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <input defaultValue={user?.displayName} type="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input value={user?.email} type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="price" {...register("price", { required: true })} placeholder="Price" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="number" {...register("number", { required: true })} placeholder="Number" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="location" {...register("location", { required: true })} placeholder="Location" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="category" {...register("category", { required: true })} placeholder="Category" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="description" {...register("description", { required: true })} placeholder="description" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="year" {...register("year", { required: true })} placeholder="Year of purchase" className="input input-bordered" />
                    {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                </div>
                <div className="form-control">
                    <input type="file"  {...register("image", { required: true })} placeholder="password" className="input input-bordered" />
                    {errors.img?.type === 'required' && <p className='text-red-600 mt-2'>Photo is required</p>}
                </div>
                <div className="form-control mt-6">
                    <input className='btn btn-accent w-full' value='Register' type="submit" />
                </div>
            </div>
        </form>
    );
};

export default AddProduct;