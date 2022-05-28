import React, { useState } from 'react';

import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProductDetails = () => {
    const [btnDisable, setBtnDisable] = useState(false);
    const [user] = useAuthState(auth)
    console.log(user)
    const { id } = useParams()
   
    


    const { data: toolsDetails, loading, refetch } = useQuery(['toolsDetails', id], () => fetch(`https://ancient-bastion-87117.herokuapp.com/tools/${ id }`).then(res => res.json()));
    //console.log(toolsDetails)

    const handleBtn = (e) => {
        let qtn = parseInt(e.target.value);
        let productQtn = parseInt(toolsDetails.quantity);
        // let minOrder = parseInt(product.minOrder);
        if (qtn > productQtn || qtn <= 100 - 1) {
            setBtnDisable(true);
        } else {
            setBtnDisable(false);
        }

    }

    const handleOrderSubmit = e => {
        e.preventDefault();
        let qtn = parseInt(e.target.elements.quantity.value);
        let productQtn = parseInt(toolsDetails.quantity);
        if (qtn > productQtn) {
            toast.info('Quantity is not available');
        } else if (qtn <= 100) {
            toast.info('Quantity should be more than 100');
        }
        else {
            const order = {
                user: user.email,
                productName: toolsDetails.name,
                product: toolsDetails._id,
                price: toolsDetails.price,
                quantity: e.target.quantity.value,
                phone: e.target.phone.value,
                address: e.target.address.value,

            }
            fetch('https://ancient-bastion-87117.herokuapp.com/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${ localStorage.getItem("accessToken") }`
                },
                body: JSON.stringify(order),
            })
                .then(res => res.json())
                .then(result => {
                    // console.log(result);
                    if (result.insertedId) {
                        toast.success('Order placed successfully');
                        e.target.reset();
                        refetch();
                    } else {
                        toast.error(result.message);
                    }
                })
        }
    }

    return (


        <div>
            <div className='flex mt-5 mb-5'>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL ? user?.photoURL : 'https://api.lorem.space/image/face?hash=92310'} alt='' />
                        <div>

                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center ml-4'>
                    <p>Name:{user?.displayName}</p>
                    <p>Email:{user?.email}</p>
                </div>
            </div>
            <h1 className='text-3xl text-center text-bold bg-base-200'>Make Sure Your Order Now :</h1>
            <div className="hero min-h-fit bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toolsDetails?.img} alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Model: {toolsDetails?.model}</h1>
                        <p className="py-6">Quantity: ${toolsDetails?.quantity}</p>
                        <p className="py-6">Price: ${toolsDetails?.price}</p>

                    </div>
                </div>
            </div>


            <form onSubmit={handleOrderSubmit}>
                <div className="hero min-h-fit bg-base-200">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" readOnly placeholder={user?.email} className="input input-bordered" />

                            </div>
                            

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder={user?.displayName} readOnly className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="quantity" name='quantity' onChange = { handleBtn } className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="Phone" name='phone' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="address" name='address' className="input input-bordered" />
                            </div>
                            
    
                            <input type="submit" disabled = { btnDisable } className='btn' value="Order Now" />

                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ProductDetails;