import React from 'react';
import { toast } from 'react-toastify';

const DeleteManageOrder = ({ mangeOederModal, setManageOrderMOdal, refetch }) => {
    const handleUserDalete = (id) => {
        fetch(`https://ancient-bastion-87117.herokuapp.com/api/admin/orders/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                refetch();
                setManageOrderMOdal({})
                toast.success('Successfully cancled')

            })
       
    }

    return (
        <div>
            <div>
                <input type="checkbox" id="delete-order" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box relative">
                        <label for="delete-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <p className="py-4">Are you sure to remove ??</p>
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