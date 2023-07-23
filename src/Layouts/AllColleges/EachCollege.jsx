import React from 'react';

const EachCollege = ({ college }) => {
    const {
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
      <div className="">
        <div className="card w-96 glass ">
          <figure>
            <img src={college_image} alt="car!" className='lg:h-96 w-full'/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCollege;