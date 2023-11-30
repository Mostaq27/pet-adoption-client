
import React from 'react'

const DonationCampDetailsCart = ({pet}) => {
    const {photo, short_details, long_details, name, maximumAmount, donatedAmount, _id} = pet;
  return (
    <div>
            <div className='col-span-1 cursor-pointer group'>
                <div className='flex flex-col gap-2 w-[400px]'>
                    <div
                        className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                    >
                        <img
                            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
                            src={photo}
                            alt='pet'
                        />
                        <div
                            className='
              absolute
              top-3
              right-3
            '
                        >

                        </div>
                    </div>
                    <div className='font-semibold text-lg'>Name: {name}</div>
                    <div className='font-light text-neutral-500'>
                        Short Description: {short_details}
                    </div>
                    <div><span className='font-semibold'>Details: </span>{long_details}</div>
                    <div className='flex flex-row items-center gap-4 justify-between'>
                        {/* <div className='font-semibold'>Maximum Amount: {maximumAmount} $</div> */}
                        <p className="font-semibold text-base flex items-center gap-2">
                            Donated Amount: <span>{donatedAmount} $</span>
                        </p>
                    </div>
                    <div className='text-center py-3'>
                        <button  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Adopt
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DonationCampDetailsCart