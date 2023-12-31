import { useEffect, useState } from "react";
import { RiRefund2Line } from "react-icons/ri";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";



const MyDonation = () => {
  
  const { user } = useAuth();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch('https://pet-adoptation-server.vercel.app/mydonation')
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(pet => pet.email === user.email);
        setPets(filteredData)
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
      confirmButtonText: 'Yes, refund it!'
    })
      .then((result) => {
        if (result.isConfirmed) {

          fetch(`https://pet-adoptation-server.vercel.app/mydonation/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Refund!',
                  'Your Donation has been refund.',
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
        <title>MyDonation | PawsNest</title>
      </Helmet>
      <div className="p-10">
        <h3 className="text-center text-3xl font-bold">My Donation : <span className=" text-orange-500"> {pets.length} Pets</span></h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>number</th>
                <th>Pet Image</th>
                <th>Pet Name</th>
                <th>Donated Amount</th>
                <th>Refund</th>

              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                pets.map((pet, index) => <tr key={pet._id}>
                  <th>{index + 1}</th>
                  <td><figure className=" rounded-lg"><img src={pet.photo} alt="photo" className="h-12 w-12 rounded-xl" /></figure> </td>
                  <td className=" font-semibold">{pet.name}</td>
                  <td className=" font-bold">{pet.donatedAmount} $</td>
                  <td className=" font-semibold">
                   <button onClick={() => handleDelete(pet._id)} className="btn btn-ghost"> <RiRefund2Line className=" text-yellow-700 h-8 w-8" /></button>
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

export default MyDonation