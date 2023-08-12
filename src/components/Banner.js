import React from 'react';

import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl  font-semibold leading-none mb-6'>
            Search for houses for 
            <span className='text-violet-700'> Rent</span>
          </h1>
        </div>
        {/* <div className='flex mx-auto pr-16 h-9'>
          <input type='text' placeholder='Search for houses' className='border-none focus:border-none border-gray-200' />

          <button className='bg-violet-700 text-white px-4 py-2 rounded-lg'>
            Search
          </button>
        </div> */}

      </div>
      <Search />
    </section>
  );
};

export default Banner;
