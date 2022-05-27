import React from 'react';

const DeleteManageOrder = ({ mangeOederModal, setManageOrderMOdal, refetch }) => {
    const handleUserDalete = (id) => {
        fetch(`https://assignment-12-2b6d5.web.app/api/admin/orders/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)

            })
        refetch();
        setManageOrderMOdal({})
    }

    return (
        <div>
            <div>
                <input type="checkbox" id="delete-order" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor="delete-order" className="btn"><button onClick={() => handleUserDalete(mangeOederModal._id)}>Yes</button></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteManageOrder;