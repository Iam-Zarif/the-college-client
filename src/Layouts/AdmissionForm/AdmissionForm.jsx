import React from 'react';
import Container from '../../Container/Container';

const AdmissionForm = () => {
    return (
      <Container>
        <div className='mt-44'>
            <div>
                <p className='text-center text-4xl basic-font'>Give Your information</p>
            </div>
            <form className='shadow-lg shadow-black py-28 rounded-full grid grid-cols-3 gap-y-8 mt-10'>
                <input placeholder='Your name' name='name' type="text" className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='Subject' type="text" className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='your email' type="email" name='email' className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='phone' name='phone' type="text" className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='address' name='address' type="text" className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='Date Of Birth' name='dob' type="date" className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='Photo Link' name='photo' type="url" className='border-slate-700 mx-auto input shadow-xl shadow-black lg:w-96' />
                <input placeholder='' type="submit" className='col-span-3 text-xl mx-auto input shadow-lg px-8 py-2 shadow-black hover:border-slate-600  cursor-pointer' />
              
            </form>
        </div>
      </Container>
    );
};

export default AdmissionForm;