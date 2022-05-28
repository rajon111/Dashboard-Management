import React from 'react';
import { toast } from 'react-toastify';

const DeleteUser = ({ userModal, setUserModal, refetch }) => {
    // console.log(userModal)
    const handleUserDalete = (id) => {
        fetch(`https://ancient-bastion-87117.herokuapp.com/api/admin/users/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

            })
        refetch();
        setUserModal({})
        toast.info('deleted user')
    }

    return (


        <div>

            <input type="checkbox" id="deleteUserModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to remove: {userModal?.email}</h3>
                    
                    <div className="modal-action">
                        <label htmlFor="deleteUserModal" className="btn"><button onClick={() => handleUserDalete(userModal._id)}>Yes</button></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;