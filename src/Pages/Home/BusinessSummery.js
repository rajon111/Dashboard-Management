import React from 'react';
import CountUp from "react-countup";

const BusinessSummery = () => {
    return (
        <div className="text-center">
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-title">Downloads</div>
          <div class="stat-value">
          <CountUp className="" duration="10" end={500} />
        </div>
          </div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
          <div class="stat-title">New Users</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
          <CountUp className="" duration="10" end={4500} />
        </div>

        <div class="stat">
          <div class="stat-title">New Registers</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
          <CountUp className="" duration="10" end={500} />
        </div>
      </div>
    );
};

export default BusinessSummery;