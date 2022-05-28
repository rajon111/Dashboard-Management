import React from 'react';

const Review = ({ review }) => {
 
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review?.review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review?.img} alt=""/>
                        </div>
                        <p className='text-xl'> Rattings : {review?.starts} <span className='rating '><input type="radio" name="rating-1" class="mask mask-star" /></span> </p>
                       
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;