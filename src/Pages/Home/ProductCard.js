import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ tool }) => {
    const { img, price, quantity, model, } = tool
    return (

        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Model:{model}</h2>
                <p>Quantity: {quantity}</p>
                <p>{tool?.discription ? tool?.discription : 'This product is very useful for practical day to day life' }</p>
                <p>Price: ${price} (per pices)</p>
                <div className="card-actions">
                    <Link to={`tools/${ tool._id }`} className='btn btn-primary'>Purchase</Link>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;