import React, { useContext, useState } from 'react';
import login1 from '../../assets/images/login1.webp'
import login2 from '../../assets/images/login2.jpg'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import toast from 'react-hot-toast';


const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleRegister = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('successfully register')
                saveUser(data.name,data.email,data.role)
                handleUpdateUserProfile(data.name, data.photoURL)
                navigate('/')

            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }
    const handleUpdateUserProfile = (name, email) => {
        const profile = {
            displayName: name,
            email
        }
        updateUserProfile(profile)
            .then(() => {

            })
            .catch(error => {
                console.error(error)

            })

    }
    const saveUser = (name, email,role) => {
        const user = { name, email, role }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' className='lg:w-1/2' src={login1} />
                <form onSubmit={handleSubmit(handleRegister)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <label className="label">

                            </label>
                            <select {...register("role", { required: true })} placeholder="role" className="select select-bordered w-full max-w-xs ">
                                <option>user</option>
                                <option>admin</option>
                                <option>Seller</option>
                            </select>
                            {errors.password?.type === 'required' && <p className='text-red-600 mt-2'>Password is required</p>}
                            <p className='text-red-600'>{registerError}</p>
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