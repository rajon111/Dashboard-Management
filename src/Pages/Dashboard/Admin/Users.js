import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading'
import DeleteUser from './DeleteUser';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Users = () => {
    const [userModal, setUserModal] = useState({})
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://ancient-bastion-87117.herokuapp.com/api/users').then(res => res.json()));
    //console.log(users);
    const makeAdmin = (userEmail) => {

        const email = { email: userEmail }
        console.log(email)

        fetch('https://ancient-bastion-87117.herokuapp.com/api/admin', {
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
                refetch()
                toast.success('Admin added successfully')
                

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