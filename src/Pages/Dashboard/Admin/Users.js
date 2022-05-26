import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading'
import DeleteUser from './DeleteUser';

const Users = () => {
    const [userModal, setUserModal] = useState({})
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/api/users').then(res => res.json()));
    console.log(users);

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            {
                userModal._id && <DeleteUser userModal={userModal} setUserModal={setUserModal} refetch={refetch} />
            }
            <table className="table w-full">

                <thead>
                    <tr>
                        <th> Email</th>
                        <th>roll</th>
                        <th>Remove User</th>
                        <th>Make Admin</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map(user => {
                            return (
                                <tr key={user?._id} className="hover">

                                    <td>{user?.email}</td>
                                    <td>{user.isAdmin}</td>

                                    <td><label onClick={() => setUserModal(user)} htmlFor="deleteUserModal" className="btn modal-button">open modal</label></td>
                                    <td><button >Make Admin</button></td>

                                    {/* <td>
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

export default Users;