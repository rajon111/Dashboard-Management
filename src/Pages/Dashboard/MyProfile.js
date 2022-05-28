import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { data: profileDetails, isLoading } = useQuery(['profileDetails', user?.email], () => fetch(`https://ancient-bastion-87117.herokuapp.com/api/users/profile/${ user?.email }`).then(res => res.json()));
    //console.log('po', profileDetails)

    if (isLoading) {
        return <Loading />
    }

    const image =profileDetails?.avatar ? profileDetails?.avatar : 'https://api.lorem.space/image/face?hash=92310' 

    return (
        <div>
            <h1 className='text-2xl'>Welcome To My Profile</h1>

            <div className="card w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{profileDetails?.name ? profileDetails?.name : 'John Doe'  }</h2>
                    <p className='text-xl'><span className='text-bold '>Phone:</span> {profileDetails?.phone ? profileDetails?.phone : '+88 03498312'}</p>
                    <p className='text-xl'><span className='text-bold '>email:</span> {profileDetails?.email ? profileDetails?.email : 'demo@gmail.com'}</p>
                    <p className='text-xl'><span className='text-bold '>Address</span> {profileDetails?.address ? profileDetails?.address : ' United State'}</p>
                    <p className='text-xl'><span className='text-bold '>Education:</span> {profileDetails?.education ? profileDetails?.education : 'BBA'}</p>
                    <p className='text-xl'><span className='text-bold '>github:</span> {profileDetails?.github ? profileDetails?.github : 'https://github.com/rajon111/'}</p>
                    <p className='text-xl'><span className='text-bold '>linkedIn:</span> {profileDetails?.linkedIn ? profileDetails?.linkedIn : 'https://www.linkedin.com/in/golam-mostofa-rajon-8906781b1/'}</p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default MyProfile;