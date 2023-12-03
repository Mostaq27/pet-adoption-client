import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { FaCirclePause } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { TbProgressCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const AllDonation = () => {

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
        setPets(data)
        setLoading(false)

      })
  }, [])

  const handleDelete = id => {
    // make sure campaigns is confirmed to delete 
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
      .then((result) => {
        if (result.isConfirmed) {

          fetch(`https://pet-adoptation-server.vercel.app/createdonation/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your Campaigns has been deleted.',
                  'success'
                )
                // remove the campaigns from the ui
                const remainingPets = pets.filter(pet => pet._id !== id);
                setPets(remainingPets);
              }
            })
        }
      })
  }

  return (
    <>
    <Helmet>
      <title>AllDonationCampaign | PawsNest</title>
    </Helmet>
    <div className="p-10">
      <h3 className="text-center text-3xl font-bold">All Donation Campaigns  : <span className=" text-orange-500"> {pets.length} Pets</span></h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>number</th>
              <th>Photo</th>
              <th>Pet Name</th>
              <th>Maximum Amount</th>
              <th>Pause</th>
              <th>Update</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              pets.map((pet, index) => <tr key={pet._id}>
                <th>{index + 1}</th>
                <td><figure className=" rounded-lg"><img src={pet.photo} alt="photo" className="h-12 w-12 rounded-xl" /></figure> </td>
                <td className=" font-semibold">{pet.name}</td>
                <td className=" font-bold">{pet.maximumAmount} $</td>
                <td className=" font-semibold"><button><FaCirclePause className=" text-blue-700 h-8 w-8" /></button></td>
                <td className=" font-semibold"><Link to={`/dashboard/updateddonation/${pet._id}`}><button className="btn btn-ghost"><FiEdit className=" text-green-700 h-8 w-8"></FiEdit></button></Link></td>
                <th><button onClick={() => handleDelete(pet._id)} className="btn btn-ghost"><MdDeleteForever className=" text-red-700 h-8 w-8"></MdDeleteForever></button></th>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}

export default AllDonation;