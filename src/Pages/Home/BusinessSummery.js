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
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div className="stat-desc">Jan 1st - Feb 1st</div>

          </div>
        </div>
        <div className="card lg:max-w-lg my-5 bg-base-300 shadow-xl">

          <div className="card-body text-center">
            <h2 className="text-2xl text-bold text-center">New Users</h2>
            <div className="stat-value"><CountUp className="" duration="10" end={45000} /><span className='text-2xl'>+</span></div>

            <div className="stat-desc">↗︎ 400 (22%)</div>
            <div class="stat-figure text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            {/* <p><CountUp className="stat-value" duration="10" end={500} /></p> */}
            <div className="stat-desc ">Jan 1st - Feb 1st</div>

          </div>
        </div>
        <div className="card lg:max-w-lg my-5 bg-base-300 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-2xl text-bold text-center">New Registers</h2>
            <p><CountUp className="stat-value" duration="10" end={10025} /> <span className='text-2xl'>+</span></p>
            <div class="stat-figure text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default BusinessSummery;