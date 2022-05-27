import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading'
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1O5iD0j9HTi9mqblzdSiuBm7G4XbEkbRksQW3JCWznFNIabPSef1It0zrplbMh0CqMZHZswPsEvog2yCUP0MZ600BdSM0tMY');

const Payment = () => {
    const { id } = useParams()
    const url = `https://ancient-bastion-87117.herokuapp.com/api/order/${ id }`

    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${ localStorage.getItem('accessToken') }`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {orders?.user}</p>
                    <h2 class="card-title">Please Pay for <span className='text-primary'>{orders?.productName}</span></h2>
                    <p>Please pay: ${orders?.pay}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;