import React from 'react';

const BookNow = ({selectCategory}) => {
    const {category}=selectCategory
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"></h3>
                    <form className='mt-6'>
                        <input type="text"  className="input input-bordered w-full mb-2 " />
                       
                        <input type="text" name='patientName' defaultValue={category}  placeholder='Name' className="input input-bordered w-full mb-2" />
                        <input type="email" name='email'  placeholder='your email' className="input input-bordered w-full mb-2" />
                        <input type="phone" name='phone' placeholder='Your Number' className="input input-bordered w-full mb-2" />
                        <input type="submit" value='Submit' placeholder="Type here" className="input bg-accent input-bordered w-full font-bold " />

                    </form>
                </div>
            </div>


        </>
    );
};

export default BookNow;