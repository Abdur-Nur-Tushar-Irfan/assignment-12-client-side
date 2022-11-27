import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';

const BookNow = ({selectCategory,setSelectCategory}) => {
    console.log(selectCategory)
    const {category,name,resalePrice,orginialPrice,picture}=selectCategory
    const {user}=useContext(AuthContext)
    const handlebooking=(e)=>{
        e.preventDefault();
        console.log('click')
        const form=e.target;
        const email=form.email.value;
        const resalePrice=form.resalePrice.value;
        const orginialPrice=form.orginialPrice.value;
        const location=form.location.value;
        const phone=form.phone.value;
        form.reset()
        const bookings={
            userName:user?.displayName,
            productName:name,
            email,
            phone,
            orginialPrice,
            resalePrice,
            location,
            picture
        }
        console.log(bookings)
        fetch('https://assignment-12-server-psi.vercel.app/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookings)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged>0){
                console.log(data)
                toast.success('Booking Confirmed')
                setSelectCategory(null)
            }
        })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"></h3>
                    <form onSubmit={handlebooking} className='mt-6'>
                        <h1 className='font-bold mb-4'>{name}</h1>
                        <input type="text" name='username'  defaultValue={user?.displayName}  placeholder='Name' className="input input-bordered w-full mb-2" />
                        <input type="email" name='email'  defaultValue={user?.email}  placeholder='Name' className="input input-bordered w-full mb-2" />
                        <input type="text" name='name' value={name}  placeholder='your email' className="input input-bordered w-full mb-2" />
                        <input type="text" name='resalePrice' value={resalePrice} placeholder='Your Number' className="input input-bordered w-full mb-2" />
                        <input type="text" name='orginialPrice' value={orginialPrice} placeholder='Your Number' className="input input-bordered w-full mb-2" />
                        <input type="text" name='location'  placeholder='Your Location' className="input input-bordered w-full mb-2" required />
                        <input type="phone" name='phone'  placeholder='Your Number' className="input input-bordered w-full mb-2" />
                        <input type="submit" value='Submit' placeholder="Type here" className="input bg-accent input-bordered w-full font-bold " required />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookNow;