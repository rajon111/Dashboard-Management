import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteManageProduct from '../Admin/DeleteManageProduct'

const ManageProduct = () => {
    const [manModal, setManModal] = useState({})
    const { data: toolsallMan, isLoading, refetch } = useQuery(['toolsallMan', manModal.id], () => fetch('http://localhost:5000/toolsallmanage').then(res => res.json()));
    console.log(toolsallMan)

    if (isLoading) {
        return <Loading />
    }

    return (

        <div>
            {
                manModal._id && <DeleteManageProduct manModal={manModal} setManModal={setManModal} refetch={refetch}></DeleteManageProduct>
            }
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Update </th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        toolsallMan?.map(all => {
                            return (
                                <tr key={all._id} className="hover">
                                    <td>{all?.name}</td>
                                    <td>{all?.price}</td>
                                    <td>{all?.quantity}</td>
                                    <td><button>Update</button></td>
                                    <td><label htmlFor="deleteManageProductModal" onClick={() => setManModal(all)} className="btn modal-button">Delete</label></td>
                                    {/* <td>{order?.paid ? order?.transactionId : 'unpaid'}</td>
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

                                    </td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;