import React from 'react';
import CountUp from "react-countup";

const BusinessSummery = () => {
  return (

    <div>
      <h1 className='text-3xl text-center text-bold'>Summary</h1>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mx-10'>

        <div className="card lg:max-w-lg my-5 bg-base-300 shadow-xl">

          <div className="card-body text-center">
            <h2 className="text-2xl text-bold text-center">Downloads</h2>
            <p><CountUp className="stat-value" duration="10" end={5000} /><span className='text-2xl'>+</span></p>
            <div className="stat-desc">Jan 1st - Feb 1st</div>

          </div>
        </div>
        <div className="card lg:max-w-lg my-5 bg-base-300 shadow-xl">

          <div className="card-body text-center">
            <h2 className="text-2xl text-bold text-center">New Users</h2>
            <div className="stat-value"><CountUp className="" duration="10" end={45000} /><span className='text-2xl'>+</span></div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
            {/* <p><CountUp className="stat-value" duration="10" end={500} /></p> */}
            <div className="stat-desc ">Jan 1st - Feb 1st</div>

          </div>
        </div>
        <div className="card lg:max-w-lg my-5 bg-base-300 shadow-xl">

          <div className="card-body text-center">
            <h2 className="text-2xl text-bold text-center">New Registers</h2>
            <p><CountUp className="stat-value" duration="10" end={10025} /> <span className='text-2xl'>+</span></p>
            <div className="stat-desc">Jan 1st - Feb 1st</div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default BusinessSummery;