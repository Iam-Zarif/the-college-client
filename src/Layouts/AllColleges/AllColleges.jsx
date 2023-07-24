import React, { useEffect, useState } from 'react';
import EachCollege from './EachCollege';
import Title from '../../Title/Title';

const AllColleges = () => {
  Title("DEGREE CAMP | ALL COLLEGE")
    const [colleges, setCollege] = useState([])
    useEffect(() =>{
fetch("https://the-college-server.vercel.app/allCollege")
.then(res => res.json())
.then(data =>{ setCollege(data)

})
    },[])
    return (
      <div className="basic-font mt-48" data-aos="fade-down" data-aos-duration="3000">
        <div>
          <p className="text-center my-10 text-4xl basic-font text-blue-500 w-1/2 mx-auto shadow-xl shadow-black rounded-xl py-2">
            Here Our All Colleges
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-y-10">
          {colleges.map((college) => {
            console.log(college);
          })}

          {colleges.map((college) => {
            return (
              <EachCollege key={college._id} college={college}></EachCollege>
            );
          })}
        </div>
      </div>
    );
};

export default AllColleges;