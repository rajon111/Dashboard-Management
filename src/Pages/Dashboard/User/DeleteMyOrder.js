import React from 'react';
import { toast } from 'react-toastify';

const DeleteMyOrder = ({ cancel, refetch, setCancel }) => {

    const deleteOrder = (id) => {
        //console.log(id)
        fetch(`https://ancient-bastion-87117.herokuapp.com/api/orders/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCancel({})
                refetch();
                toast.success(' Deleted successfully')

            })


    }
    return (
        <div>
            <input type="checkbox" id="user-delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label for="user-delete-order" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <p className="py-4">Are you sure to remove ??</p>
                    <div className="modal-action">
                        <button onClick={() => deleteOrder(cancel._id)}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteMyOrder;