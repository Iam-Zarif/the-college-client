import React from 'react';
import Auth from '../../Hooks/Auth';
import { Link } from 'react-router-dom';

const EachCollege = ({ college }) => {
  const {user} = Auth();
  console.log(college)
    const {
      research_num,
      college_name,
      admission_dates,
      college_image,
      events,
      research_history,
      sports,
      
    } = college;
    
    {/* { console.log(admission_dates.fall)}
  {console.log(admission_dates.spring)}
  {console.log(admission_dates.summer)} */}
    {/* {console.log(events[0].event_name)}
  {console.log(events[0].date)}
  {console.log(events[0].location)} */}
    {/* {console.log(research_history.project_name)}
    {console.log(research_history.start_date)}
    {console.log(research_history.end_date)}
    {console.log(research_history.faculty_lead)}
    {console.log(research_history.description)} */}
    {/* {console.log(sports[0])}
    {console.log(sports[1])}
    {console.log(sports[2])}
    {console.log(sports[3])} */}
  return (
    <div className="mt-12 mx-auto">
      {/* You can open the modal using ID.showModal() method */}

      {/* Open the modal using ID.showModal() method */}

      <div className="">
        <div className="card w-96 glass ">
          <figure>
            <img src={college_image} alt="car!" className="lg:h-96 w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{college_name}</h2>
            <p className="text-xl text-white mt-6">Admission - </p>
            <p>
              {admission_dates.summer} || {admission_dates.spring}
            </p>
            <p>
              <span className="text-xl text-white mt-6">
                Number Of Research
              </span>{" "}
              - <p>{research_num} projects </p>
            </p>
            <p></p>
            <div className="card-actions justify-end">
              {user ? (
                <>
                  <Link to={`/collegeDetails/${college._id}`}>
                    <button className="btn">Details</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn btn-primary">
                      Login for details
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCollege;