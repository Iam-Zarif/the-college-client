import React from 'react';
import { Link } from 'react-router-dom';

const SingleHomeCollege = ({college}) => {
    const {
      college_name,
      admission_dates,
      college_image,
      events,
      research_history,
      sports,
    } = college;
    return (
      <div className="px-16 lg:px-0">
        <div className="card  glass mx-auto mt-8 ">
          <figure>
            <img
              src={college_image}
              alt="car!"
              className="w-full lg:h-[500px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title basic-font text-5xl text-white">
              {college_name}
            </h2>
            <div className="mt-8">
              <p className="text-xl text-slate-200 font-bold">Admissions - </p>
              <p>
                {admission_dates.summer} || {admission_dates.spring}
              </p>
            </div>
            <div>
              <p className="text-xl text-slate-200 font-bold">Events - </p>
              <p>
                {events[0].event_name} || {events[0].date} ||{" "}
                {events[0].location}
              </p>
            </div>
            <div>
              <p className="text-xl text-slate-200 font-bold">Sports - </p>
              <p>
                {sports[1]} || {sports[2]} || {sports[3]}
              </p>
            </div>
            <div className='mt-4'>
              <Link className="text-xl text-slate-200 font-bold hover:shadow-xl hover:shadow-black rounded-xl p-1 ">
                Research history
              </Link>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleHomeCollege;