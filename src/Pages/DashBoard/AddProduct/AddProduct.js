import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddProduct = (data) => {
        console.log(data)
       
        

    }

    return (
        <form onSubmit={handleSubmit(handleAddProduct)} className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <input type="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
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