import React from 'react';

const ManageProduct = () => {

    return (
        <div>
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

                    {/* {
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
                                                        order?.status ? <p className='text-green-500'>Delivered</p> : <label onClick={() => setShipped(order)} htmlFor="shipped-modal" className="text-orange-500 hover:underline hover:cursor-pointer">Shipped</label>
                                                    }
                                                </> :
                                                <label onClick={() => setDeleted(order)} htmlFor="delete-order" className="text-red-500 hover:underline hover:cursor-pointer">Cancel</label>
                                        }

                                    </td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;