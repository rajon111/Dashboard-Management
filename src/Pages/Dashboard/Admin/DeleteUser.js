import React from 'react';

const DeleteUser = ({ userModal, setUserModal, refetch }) => {
    // api/admin/users/
    const handleUserDalete = (id) => {
        fetch(`https://assignment-12-2b6d5.web.app/api/admin/users/${ id }`, {
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
    }

    return (


        <div>




            <input type="checkbox" id="deleteUserModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="deleteUserModal" className="btn"><button onClick={() => handleUserDalete(userModal._id)}>Yes</button></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteUser;