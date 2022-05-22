import React from 'react';
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id:1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            // img: people1
        },
        {
            _id:2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            // img: people2
        },
        {
            _id:3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            // img: people3
        },
    ];

    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div className='grid mx-auto'>
                    
                    <h2 className='text-3xl ml-50 mb-3'>What our Clients say</h2>
                </div>
                <div>
                    {/* <img src={quote} className="w-24 lg:w-48" alt="" /> */}
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;