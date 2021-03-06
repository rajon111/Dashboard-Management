import React from 'react';
import Review from './Review';
import { useQuery } from 'react-query'
import Loading from '../../Pages/Shared/Loading'

const Testimonials = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('https://ancient-bastion-87117.herokuapp.com/api/home/review').then(res => res.json()));

    // console.log('check', reviews)
    if (isLoading) {
        return <Loading></Loading>
    }

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
                    reviews?.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;