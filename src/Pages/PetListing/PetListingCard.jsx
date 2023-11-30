
import React from 'react'
import { Zoom } from 'react-awesome-reveal';
import { FaAngleRight } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PetListingCard = ({ pet }) => {
    console.log(pet)
    const { photo, location, age, name, _id } = pet;
    return (
        <div>
           <Zoom>
           <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-96 h-72" src={photo} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Name: {name}</div>
                    <div className='flex justify-between '>
                        <p className="text-gray-400 text-base">
                            Age: {age} Years
                        </p>
                        <p className="text-gray-400 text-base flex items-center gap-2">
                        <span className='text-blue-700'><FaLocationDot /></span> <span>{location}</span>
                        </p>
                    </div>
                </div>
                <div className=" pb-2 text-center">
                    <Link to={`/pet_details/${_id}`}>
                    <button
                        className="btn btn-outline bg-blue-400 text-white border-0 border-b-4 border-red-500 mt-4"
                    >Details <FaAngleRight /> </button>
                    </Link>
                </div>
            </div>
           </Zoom>
        </div>
    )
}

export default PetListingCard