import React from 'react';

const DeleteMyOrder = ({ cancel, refetch, setCancel }) => {

    const deleteOrder = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/api/orders/${ id }`, {
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
        
        setCancel({})
        refetch();
    }
    return (
        <div>




            <input type="checkbox" id="user-delete-order" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="user-delete-order" className="btn"><button onClick={() => deleteOrder(cancel._id)}>Yes</button></label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteMyOrder;