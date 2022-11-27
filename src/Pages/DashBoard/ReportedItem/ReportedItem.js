import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItem = () => {
    const { data: reports = [] } = useQuery({
        queryKey: [],
        queryFn: () => fetch('https://assignment-12-server-psi.vercel.app/reports')
            .then(res => res.json())
    })
    const deleteReport=(id)=>{
        const agree = window.confirm('Are your sure you delete reported items')
        if(agree){
            fetch(`https://assignment-12-server-psi.vercel.app/reports/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Report deleted successfully ')
            })
            .catch(err=>console.err(err))

        }


    }
    return (
        <div className="overflow-x-auto w-full">
            <h1 className='text-3xl font-bold'>ALL REPORTED ITEMS</h1>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>CATEGORY NAME</th>
                        <th>RESALE PRICE</th>
                        <th>ORIGINAL PRISE</th>
                        <th>LOCATION</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reports.length>0 && 
                        reports?.map(report=>
                            <tr>
                                <th>
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={report.picture} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{report.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                   {report.resalePrice}
                                </td>
                                <td>
                                   {report.orginialPrice}
                                </td>
                                <td>
                                   {report.location}
                                </td>
                                <th>
                                    <button onClick={()=>deleteReport(report._id)} className="badge badge-secondary">DELETE</button>
                                </th>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportedItem;