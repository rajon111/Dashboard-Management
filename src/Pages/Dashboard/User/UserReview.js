import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const UserReview = () => {
    const [user] = useAuthState(auth)
    const { data: userData } = useQuery(user?.email, () => fetch(`https://ancient-bastion-87117.herokuapp.com/api/users/profile/${ user?.email }`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${ localStorage.getItem("accessToken") }`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            return toast.error('You are not authorized to perform this action');
        } else {
            return res.json();

        }
    }));

    const handleReviewSubmit = e => {
        e.preventDefault();
        const review = {
            name: user?.displayName,
            img: userData?.avatar || 'https://api.lorem.space/image/face?hash=92310',
            bio: userData?.bio || 'Web Developer',
            location: e.target.location.value,
            t: e.target.start.value,
            review: e.target.review.value,
        }
        fetch('https://ancient-bastion-87117.herokuapp.com/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${ localStorage.getItem("accessToken") }`
            },
            body: JSON.stringify(review),
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return toast.error('You are not authorized to perform this action');
                } else {
                    return res.json();

                }
            })
            .then(result => {
                if (result.insertedId) {
                    e.target.reset();
                    toast.success('Review added successfully');
                }
            })
    }
    return (
        <div>

            <div className=" my-14 w-4/5 mx-auto rounded-xl shadow-2xl bg-base-100">
                <h3 className='text-center font-bold pt-5'>Add a review</h3>
                <form className='flex w-3/5 mx-auto' onSubmit={handleReviewSubmit} >
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder={user?.displayName} className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input type="text" name='location' placeholder='Dhaka, Bangladesh' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Starts</span>
                            </label>
                            <select className="input input-bordered" name="start" id="start">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea className="input input-bordered" name="review" id="review" cols="30" rows="10"></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserReview;    