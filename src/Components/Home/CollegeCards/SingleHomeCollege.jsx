import React from 'react';

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
      <div>
        <div className="card w-96 glass mx-auto mt-8">
          <figure>
            <img
              src={college_image}
              alt="car!"
            />
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
    );
};

export default SingleHomeCollege;