import React from 'react';
import { toast } from 'react-toastify';

const DeleteManageProduct = ({ manModal, setManModal, refetch }) => {
    console.log(manModal)
    const handleUserDalete = (id) => {
        // console.log(id)
        fetch(`https://ancient-bastion-87117.herokuapp.com/api/products/admin/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                refetch();
                setManModal({})
                toast.success(' Deleted successfully')
            })
      
    }
    return (
        <div>
            <input type="checkbox" id="deleteManageProductModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                <label for="deleteManageProductModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <p className="py-4">Are you sure to remove ??</p>
                    <div className="modal-action">
                    <button onClick={() => handleUserDalete(manModal._id)}><span class="btn btn-sm ">Yes</span> </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteManageProduct;