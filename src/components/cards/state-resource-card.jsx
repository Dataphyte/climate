import React from 'react';
import PersonIcon from '@/icons/personIcon';
import { MapIcon } from '@heroicons/react/24/outline';

const StateResourceCard = ({ data }) => {
  return (
    <div className='flex w-full max-w-sm rounded-lg shadow-md flex-col bg-white cursor-pointer duration-150 ease-out group hover:shadow-lg'>
      {/* ====== MAIN CONTENT */}
      <span className='w-full flex flex-col h-28 justify-center px-6 relative'>
        <p className='text-lg text-gray-800 font-medium duration-150 ease-out group-hover:text-main-color'>
          {data.state}
        </p>
        <p className='text-gray-700 font-light text-sm'>
          {data.no_of_lga} total LGAs
        </p>
        <p className='text-gray-700 font-light text-sm'>
          {data.lga_affected.length} affected LGAs
        </p>
        <MapIcon className='w-10 h-10 text-gray-600 absolute right-12' />
      </span>

      {/* ====== BOTTOM SECTION */}
      <span className='w-full flex items-center justify-center h-14 border-t'>
        <p className='w-full flex text-gray-700 font-light text-sm h-full justify-center items-center gap-1 border-r'>
          <b className='font-secondary font-black text-lg'>
            {data.no_of_displaced}
          </b>
          Displaced
        </p>
        <p className='w-full flex text-gray-700 font-light text-sm h-full justify-center items-center gap-1 border-r'>
          <b className='font-secondaryfont-black text-lg'>
            {data.no_of_deaths}
          </b>
          Deaths
        </p>
      </span>
    </div>
  );
};

export default React.memo(StateResourceCard);
