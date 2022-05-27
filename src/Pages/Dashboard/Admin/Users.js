import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading'
import DeleteUser from './DeleteUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Users = () => {
    const [userModal, setUserModal] = useState({})
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://assignment-12-2b6d5.web.app/api/users').then(res => res.json()));
    //console.log(users);
    const makeAdmin = (userEmail) => {
        const email = { email: userEmail }
        console.log(email)

        fetch('https://assignment-12-2b6d5.web.app/api/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${ localStorage.getItem('accessToken') }`
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)

            })


    }

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

                                    <td><label onClick={() => setUserModal(user)} htmlFor="deleteUserModal" className="btn modal-button">remove User</label></td>
                                    <td>{!(user.isAdmin) ? <button onClick={() => makeAdmin(user?.email)} className='btn'>Make Admin</button> : ''}</td>

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