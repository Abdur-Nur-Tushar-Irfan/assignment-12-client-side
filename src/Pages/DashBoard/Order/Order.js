import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Order = () => {
    const { user } = useContext(AuthContext)
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th> </th>
                        <th>Product Name</th>
                        <th>Original Price</th>
                        <th>Resale Price</th>
                        <th>Pay</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 &&
                        bookings?.map(booking => <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={booking?.picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                {booking?.productName}
                            </td>
                            <td>{booking?.orginialPrice}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{booking?.resalePrice}</button>
                            </th>
                            <th>
                                <button><div className="badge badge-secondary">Pay</div></button>
                            </th>

                        </tr>)

                    }

                </tbody>



            </table>
        </div>
    );
};

export default Order;