import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Allseller = () => {
    const {user}=useContext(AuthContext)
    const url=`https://assignment-12-server-psi.vercel.app/seller?role=seller`
    const {data:users=[],refetch}=useQuery({
       queryKey:['users',user?.email],
       queryFn:async()=>{
          const res=await fetch(url);
          const data=await res.json();
          return data;
       }
    })
    const handleSellerDelete = (id) => {
        const agree = window.confirm('are your sure you delete your seller')
        if (agree) {
            fetch(`https://assignment-12-server-psi.vercel.app/seller/${id}`, {
                method: 'DELETE',
               
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete successfully')
                        refetch()
                    }
                })
        }

    }

    return (
        <div className="overflow-x-auto">
            <h1 className='text-3xl font-bold'>ALL SELLER</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((usr,i)=> <tr>
                            <th>{i+1}</th>
                            <td>{usr?.name}</td>
                            <td>{usr?.email}</td>
                            <td><button onClick={()=>handleSellerDelete(usr._id)}><div className="badge badge-secondary">Delete</div></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allseller;