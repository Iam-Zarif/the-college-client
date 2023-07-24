import React, { useEffect, useState } from 'react';
import SingleHomeCollege from './SingleHomeCollege';
import Container from '../../../Container/Container';

const CollegeCards = () => {
    const [colleges, setCollege] = useState([]);
    useEffect(() => {
      fetch("https://the-college-server.vercel.app/allCollege")
        .then((res) => res.json())
        .then((data) => {
          setCollege(data);
        });
    }, []);
    return (
      <Container>
        <div className="mt-12" data-aos="fade-down" data-aos-duration="3000">
          <div>
            <p className="text-center mb-12 text-3xl text-blue-500 basic-font font-semibold shadow-lg shadow-black w-1/2 mx-auto py-2 rounded-xl">
              Best Colleges
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-28">
            {colleges.slice(0, 3).map((college) => {
              return (
                <SingleHomeCollege
                  key={college._Id}
                  college={college}
                ></SingleHomeCollege>
              );
            })}
          </div>
        </div>
      </Container>
    );
};

export default CollegeCards;