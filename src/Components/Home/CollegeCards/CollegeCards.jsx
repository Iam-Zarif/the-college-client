import React, { useEffect, useState } from 'react';
import SingleHomeCollege from './SingleHomeCollege';

const CollegeCards = () => {
    const [colleges, setCollege] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allCollege")
        .then((res) => res.json())
        .then((data) => {
          setCollege(data);
        });
    }, []);
    return (
        <div className='mt-44'>
            <div>
                <p className="text-center mb-12 text-3xl text-blue-500 basic-font font-semibold shadow-xl shadow-black w-1/2 mx-auto py-2 rounded-xl">
          Our Memorable Moments
        </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
{
    colleges.slice(0,3).map(college =>
        
        {
return <SingleHomeCollege
key={college.Id}
college={college}></SingleHomeCollege>
    })
}
            </div>
        </div>
    );
};

export default CollegeCards;