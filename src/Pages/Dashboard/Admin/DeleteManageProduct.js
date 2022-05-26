import React from 'react';

const DeleteManageProduct = ({ manModal, setManModal, refetch }) => {

    const handleUserDalete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/api/products/admin/${ id }`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
        refetch();
        setManModal({})
    }
    return (
        <div>
            <input type="checkbox" id="deleteManageProductModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label for="deleteManageProductModal" className="btn"><button onClick={() => handleUserDalete(manModal._id)}>Yes</button></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteManageProduct;