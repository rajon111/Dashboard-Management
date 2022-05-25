import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ProductDetails = () => {
    const [user] = useAuthState(auth)
    const { id } = useParams()
    const { data: toolsDetails, loading, refetch } = useQuery(['toolsDetails', id], () => fetch(`http://localhost:5000/tools/${ id }`).then(res => res.json()));
    console.log(toolsDetails)

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
            }
            fetch('http://localhost:5000/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${ localStorage.getItem("accessToken") }`
                },
                body: JSON.stringify(order),
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
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
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={toolsDetails?.img} className='h-48 w-80' alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{toolsDetails?.model}</h1>
                        <p class="py-6">{toolsDetails?.quantity}</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>


            <form onSubmit={handleOrderSubmit}>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        {/* <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" readOnly placeholder={user?.email} class="input input-bordered" />
                                    
                                </div>

                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder={user?.displayName} readOnly class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Quantity</span>
                                    </label>
                                    <input type="text" placeholder="quantity" name='quantity' class="input input-bordered" />
                                </div>
                                <input type="submit" value="Submit" />

                                {/* <div class="form-control mt-6">
                                    <button onClick={() => handleOrderSubmit()} class="btn btn-primary">Login</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductDetails;