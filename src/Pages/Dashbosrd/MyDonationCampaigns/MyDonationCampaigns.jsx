
import React, { useEffect, useState } from 'react'
import useAuth from '../../../Hooks/useAuth';
import { MdDeleteForever, MdPets } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { TbProgressCheck } from "react-icons/tb";
import { FaCirclePause } from 'react-icons/fa6';
import { GrFormView } from "react-icons/gr";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyDonationCampaigns = () => {

  const { user } = useAuth();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch('https://pet-adoptation-server.vercel.app/createdonation')
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(pet => pet.email === user.email);
        setPets(filteredData)
        setLoading(false)

      })
  }, [])

 

  return (
    <>
      <Helmet>
        <title>MyDonationCampaign | PawsNest</title>
      </Helmet>
      <div className="p-10">
        <h3 className="text-center text-3xl font-bold">My Donation Campaigns  : <span className=" text-orange-500"> {pets.length} Pets</span></h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>number</th>
                <th>Pet Name</th>
                <th>Maximum Amount</th>
                <th>Donation Progress Bar</th>
                <th>Pause</th>
                <th>Update</th>
                <th>View</th>

              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                pets.map((pet, index) => <tr key={pet._id}>
                  <th>{index + 1}</th>
                  {/* <td><figure className=" rounded-lg"><img src={pet.photo} alt="photo" className="h-20 w-20 rounded-xl" /></figure> </td> */}
                  <td className=" font-semibold">{pet.name}</td>
                  <td className=" font-bold">{pet.maximumAmount} $</td>
                  <td className=" font-semibold"><TbProgressCheck className=" text-yellow-700 h-8 w-8" /></td>
                  <td className=" font-semibold"><button><FaCirclePause className=" text-blue-700 h-8 w-8" /></button></td>
                  <td className=" font-semibold"><Link to={`/dashboard/updateddonation/${pet._id}`}><button className="btn btn-ghost"><FiEdit className=" text-green-700 h-8 w-8"></FiEdit></button></Link></td>
                  <td className='font-semibold'><button className="btn btn-ghost">
                    <GrFormView className=" text-orange-600 h-8 w-8"/>
                    </button>
                    </td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MyDonationCampaigns