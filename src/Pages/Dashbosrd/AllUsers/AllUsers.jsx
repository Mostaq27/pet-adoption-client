import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";



const AllUsers = () => {
    const { user } = useAuth();
  const [loading, setLoading] = useState(true)
  
  const [users, setUsers] = useState([])
  console.log(users)
  useEffect(() => {
    fetch('https://pet-adoptation-server.vercel.app/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)

      })
  }, [])


  const handleAdmin = id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "Make Admin!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.patch(`https://pet-adoptation-server.vercel.app/users/admin/${id}`)
    .then(res=>{
        if(res.data.modifiedCount > 0) {

            Swal.fire({
                title: "success!",
                text: "Make Admin successfully.....",
                icon: "success"
              });

              fetch('https://pet-adoptation-server.vercel.app/users')
              .then(res => res.json())
              .then(data => {
                setUsers(data)
                setLoading(false)
        
              })

        }
    })
         
        }
      });
    
  }


  return (
    <>
    <Helmet>
      <title>AllUSers | PawsNest</title>
    </Helmet>
    <div className="p-10">
      <h3 className="text-center text-3xl font-bold">All Users : <span className=" text-orange-500"> {users.length} Pets</span></h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>number</th>
              <th>Photo</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Stutas</th>

            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td><figure className=" rounded-lg"><img src={user.photo} alt="photo" className="h-16 w-16 rounded-xl" /></figure> </td>
                <td className=" font-semibold">{user.name}</td>
                {/* <td className=" font-bold">{pet.maximumAmount} $</td> */}
                <td className=" font-semibold">{user.email}</td>
                <td className=" font-semibold">
                    
                    
                {
                        user?.role ==='admin' ? "Admin " : <button onClick={()=>handleAdmin(user?._id)} className="btn btn-sm bg-orange-400 text-white">
                    
                   
                        Make Admin</button>
                    }

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

export default AllUsers;