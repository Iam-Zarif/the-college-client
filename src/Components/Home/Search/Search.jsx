import React from 'react';

const Search = () => {
    return (
      <div className="flex mt-44 content-center items-center justify-center gap-5">
        <div>
          <input
            type="text"
            name="name"
            className="input shadow-xl shadow-black lg:w-[400px] "
            id=""
            placeholder='College Name'
          />
        </div>
        <div>
          <button className="text-white btn hover:border-blue-500">Search</button>
        </div>
      </div>
    );
};

export default Search;