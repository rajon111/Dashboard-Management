import React from 'react';
import dropBox from '../../assets/icons/dropbox-brands.svg'
import truck from '../../assets/icons/truck-solid.svg'
import earth from '../../assets/icons/earth-asia-solid.svg'
import archive from '../../assets/icons/warehouse-solid.svg'
import home from '../../assets/icons/map-location-dot-solid.svg'
import road from '../../assets/icons/road-circle-check-solid.svg'

const OurServices = () => {
    const services = [
        {
            id:1,
            name: "PACKAGING AND STORAGE",
            text: "We can package and store your things.",
            icon: dropBox
        },
        {
            id:2,
            name: "CARGO",
            text: "Let us transport your things from point A to point B fast and securely.",
            icon: truck
        },
        {
            id:3,
            name: "WORLDWIDE TRANSPORT",
            text: "We can transport your things anywhere in the world.",
            icon: earth
        },
        {
            id:4,
            name: "WAREHOUSING",
            text: "We have top notch security and loads of space. Store your stuff at our warehouse.",
            icon: archive
        },
        {
            id:5,
            name: "DOOR-TO-DOOR DELIVERY",
            text: "Do you need something delivered? We are what you are looking for!",
            icon: home
        },
        {
            id:6,
            name: "GROUND TRANSPORT",
            text: "Transport your things with our super moving vans.",
            icon: road
        }
    ];

    return (
       
       <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-4xl font-semibold my-10 text-center'>Our <span className='text-primary'>Services</span></h1>

            <div className=' grid lg:grid-cols-3 grid-cols-1 gap-5'>

                {
                    services.map(service => <div 
                    key={service.id} 
                    className="card w-80 mx-auto lg:w-96 rounded-none bg-gradient-to-r from-secondary to-primary hover:shadow-xl border-b-2 border-white hover:border-b-2 hover:border-indigo-600">
                        <div className='card-body'>
                            <div className='flex justify-between items-center gap-5'>
                                <div>
                                    <h2 className="card-title text-lg mb-2">{service.name}</h2>
                                    <p className='text-sm '>{service.text}</p>
                                </div>
                                <img width={50} height={50} src={service.icon} alt="dropBox" />
                            </div>
                        </div>
                    </div>) 
                }

            </div>
        </div>
    );
};

export default OurServices;