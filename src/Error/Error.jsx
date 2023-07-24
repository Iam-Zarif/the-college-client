import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title/Title';

const Error = () => {
  Title("ERROR PAGE")
    return (
      <div>
        <img
          className="mx-auto mt-28 rounded-full"
          src="https://i.ibb.co/2dtrSZC/404-gif-8.gif"
          alt=""
        />
        <div className="text-center mt-8 text-xl">
          <p>Page Not Found. We are working on it</p>
          <p>
            Or You can go{" "}
            <Link to="/">
              <span className='text-blue-500 font-semibold underline'>Home</span>
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Error;