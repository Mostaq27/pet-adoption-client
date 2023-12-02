import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { MdDeleteForever, MdPets } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyAddedPet = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true)
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/pets')
      .then(res => res.json())
      .then(data => {
        const filteredData = data.filter(pet => pet.email === user.email);
        setPets(filteredData)
        setLoading(false)

      })
  }, [])

  const handleDelete = (id) => {
    // make sure pet is confirmed to delete 
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

          fetch(`http://localhost:5000/pets/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your Pet has been deleted.',
                  'success'
                )
                // remove the pet from the ui
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
        <title>MyPet | PawsNestt</title>
      </Helmet>
      <div className="p-10">
        <h3 className="text-center text-3xl font-bold">My Added Pets : <span className=" text-orange-500"> {pets.length} Pets</span></h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>number</th>
                <th>Photo</th>
                <th>Pet Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                pets.map((pet, index) => <tr key={pet._id}>
                  <th>{index + 1}</th>
                  <td><figure className=" rounded-lg"><img src={pet.photo} alt="photo" className="h-16 w-16 rounded-xl" /></figure> </td>
                  <td className=" font-semibold">{pet.name}</td>
                  <td className=" font-bold">{pet.category}</td>
                  <td className=" font-semibold"></td>
                  <td className=" font-semibold"><Link to={`/dashboard/updatedpet/${pet._id}`}><button className="btn btn-ghost"><FiEdit className=" text-green-700 h-8 w-8"></FiEdit></button></Link></td>
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

export default MyAddedPet;