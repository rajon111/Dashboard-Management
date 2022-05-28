import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import DeleteManageProduct from '../Admin/DeleteManageProduct'
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [manModal, setManModal] = useState({})
    const { data: toolsallMan, isLoading, refetch } = useQuery(['toolsallMan', manModal.id], () => fetch('https://ancient-bastion-87117.herokuapp.com/toolsallmanage').then(res => res.json()));
    // console.log(toolsallMan)

    if (isLoading) {
        return <Loading />
    }
    // check again

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
                                    <td><Link to={`/dashboard/manageproduct/${ all._id }`}>Update</Link></td>
                                    <td><label htmlFor="deleteManageProductModal" onClick={() => setManModal(all)} className="btn modal-button">Delete</label></td>
                                   
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