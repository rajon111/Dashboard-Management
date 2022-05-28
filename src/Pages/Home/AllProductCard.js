import React from 'react';
import { Link } from 'react-router-dom';

const AllProductCard = ({ tool }) => {
    const { img, price, quantity, model } = tool
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{model}</h2>
                <p>{quantity}</p>
                <p>{price}</p>
                <div className="card-actions">
                    <Link to={`/tools/${ tool._id }`} className='btn btn-primary'>Purchase</Link>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;