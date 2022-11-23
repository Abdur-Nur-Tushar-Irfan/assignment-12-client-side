import React from 'react';
import login1 from '../../assets/images/login1.webp'
import login2 from '../../assets/images/login2.jpg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' className='lg:w-1/2' src={login1} />
                <form onSubmit={handleSubmit()} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <img className=' h-15 w-1/2 rounded-full mx-auto' src={login2} alt='' />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <p className='text-red-600 mt-2'>Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <p className='text-red-600 mt-2'>Email is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: { value: 6, message: 'Password must be 6 character' } })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className='text-red-600 mt-2'>Password is required</p>}
                            <label className="label">
                                <p>Already Login? <Link to='/login' className='text-cyan-700 font-bold'>Log in</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full' value='Register' type="submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;