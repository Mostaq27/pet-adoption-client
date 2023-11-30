import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { MdDeleteForever, MdPets } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

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

  const handleDelete = () => {

  }

  return (
    <>
      {/* <Helmet>
                <title>Mycart | Tech Point</title>
            </Helmet> */}
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
                <th>Adopted</th>
                <th>Update</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {
                pets.map((pet, index) => <tr key={pet._id}>
                  <th>{index + 1}</th>
                  <td><figure className=" rounded-lg"><img src={pet.photo} alt="photo" className="h-20 w-20 rounded-xl" /></figure> </td>
                  <td className=" font-semibold">{pet.name}</td>
                  <td className=" font-bold">{pet.category}</td>
                  <td className=" font-semibold"></td>
                  <td className=" font-semibold"><button><MdPets className=" text-blue-700 h-8 w-8" /></button></td>
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