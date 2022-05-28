import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteManageOrder from './DeleteManageOrder';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const ManageOrder = () => {
    const [user] = useAuthState(auth)
    const [mangeOederModal, setManageOrderMOdal] = useState({})
    const { data: orders, isLoading, refetch } = useQuery(['orders', user?.uid], () => fetch('https://ancient-bastion-87117.herokuapp.com/api/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    const handleShift = (id) => {
        fetch(`https://ancient-bastion-87117.herokuapp.com/api/orders/shipped/${ id }`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            refetch()
            toast.success('shipped ')
        })
    }

    return (

        <div>
            {
                mangeOederModal._id && <DeleteManageOrder mangeOederModal={mangeOederModal} setManageOrderMOdal={setManageOrderMOdal} refetch={refetch} />
            }
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>User Email</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Payment ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders?.map(order => {
                            return (
                                <tr key={order._id} className="hover">
                                    <td>{order?.user}</td>
                                    <td>{order?.productName}</td>
                                    <td>{order?.quantity}</td>
                                    <td ><button className='btn btn-xs'>{order?.paid ? order?.transactionId : 'unpaid'}</button> </td>
                                    <td>
                                        {
                                            order?.paid ?
                                                <>
                                                    {
    
                                                        order?.status ? <p className='text-green-500'>Delivered</p> : <button onClick={()=>handleShift(order?._id) } className="text-orange-500 btn btn-xs hover:underline hover:cursor-pointer">Shipped</button>
                                                    }
                                                </> :
                                                <label htmlFor="delete-order" onClick={() => setManageOrderMOdal(order)} className="text-red-500 hover:underline hover:cursor-pointer bg-transparent">Cancel</label>
                                            // htmlFor="shipped-modal"
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

export default ManageOrder;