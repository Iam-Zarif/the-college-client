import React from 'react';
import Auth from '../../Hooks/Auth';
import Container from '../../Container/Container';
import Title from '../../Title/Title';

const Userinfo = () => {
  Title("DEGREE CAMP | YOUR INFO")
    const {user} = Auth()
    return (
      <Container>
        <div className="mt-44 basic-font">
          <p className="text-center text-4xl font-semibold text-white">User Details</p>
        </div>
        <div className="basic-font mt-20 flex flex-col justify-center items-center">
          
          <img src={user.photoURL} className="rounded-full w-32" alt="" />
          <p className='mt-6'><span className='text-blue-500 text-xl'>Name</span>:  {user.displayName}</p>
          <p><span className='text-blue-500 text-xl'>Email</span>: {user.email}</p>
          <p></p>
        </div>
      </Container>
    );
};

export default Userinfo;