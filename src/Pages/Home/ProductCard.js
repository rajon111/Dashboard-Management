import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({tool}) => {
    const {img,price,quantity,model} = tool
    return (

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">Model:{model}</h2>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price} (per pices)</p>
                <div class="card-actions">
                    <Link to={`tools/${tool._id}`} className='btn btn-primary'>Purchase</Link>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;