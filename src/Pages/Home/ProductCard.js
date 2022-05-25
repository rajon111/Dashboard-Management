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
                <h2 class="card-title">{model}</h2>
                <p>{quantity}</p>
                <p>{price}</p>
                <div class="card-actions">
                    <Link to={`tools/${tool._id}`}>Purchase</Link>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;