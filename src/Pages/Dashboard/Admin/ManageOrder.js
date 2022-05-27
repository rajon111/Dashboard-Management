import React, { useState } from 'react';

import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteManageOrder from './DeleteManageOrder';

const ManageOrder = () => {
    const [mangeOederModal, setManageOrderMOdal] = useState({})
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://assignment-12-2b6d5.web.app/api/orders').then(res => res.json()));

    if (isLoading) {
        return <Loading />
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
                                    <td>{order?.paid ? order?.transactionId : 'unpaid'}</td>
                                    <td>
                                        {
                                            order?.paid ?
                                                <>
                                                    {
                                                        order?.status ? <p className='text-green-500'>Delivered</p> : <label htmlFor="shipped-modal" className="text-orange-500 hover:underline hover:cursor-pointer">Shipped</label>
                                                    }
                                                </> :
                                                <label htmlFor="delete-order" onClick={() => setManageOrderMOdal(order)} className="text-red-500 hover:underline hover:cursor-pointer">Cancel</label>
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