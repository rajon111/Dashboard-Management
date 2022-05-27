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

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={profileDetails?.avatar} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    </div>

                    <div>
                        <h1 className="text-5xl font-bold">{profileDetails?.name}</h1>
                        <p className="py-6">{profileDetails?.phone}</p>
                        <p className="py-6">{profileDetails?.email}</p>
                        <p className="py-6">{profileDetails?.address}</p>
                        <p className="py-6">{profileDetails?.education}</p>
                        <p className="py-6">{profileDetails?.github}</p>
                        <p className="py-6">{profileDetails?.linkedIn}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;