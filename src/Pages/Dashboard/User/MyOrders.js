import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import DeleteMyOrder from './DeleteMyOrder';


const MyOrders  = () => {
    const [cancel, setCancel] = useState({});
    const [user] = useAuthState(auth)
    let { data: order, refetch } = useQuery(["order", user?.email], () => {
        return fetch(`http://localhost:5000/api/order/?email=${user?.email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return toast.error('You are not authorized to perform this action');
                } else {
                    return res.json();

                }
            });
    })
    if (!Array.isArray(order)) {
        order = [];
    }
    

    return (
        <div className="overflow-x-auto">
           
            {
                cancel._id && <DeleteMyOrder cancel={cancel} refetch={refetch} setCancel={setCancel} />
            }
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Order ID</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order && order?.map(order => {
                            return (
                                <tr key={order?._id} className="hover">
                                    <td>{order?.productName}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?.status ? order?.status : 'pending'}</td>
                                    <td>{order?._id}</td>
                                    <td>
                                        {
                                            order?.paid ? <p className='text-green-500'>Paid</p> :
                                                <>
                                                    <label onClick={() => setCancel(order)} htmlFor="user-delete-order" className="text-red-500 hover:cursor-pointer hover:underline">Cancel</label>
                                                    <Link className='mx-2 text-green-500 hover:underline' to={`/dashboard/payment/${order?._id}`}>pay</Link>
                                                </>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders ;