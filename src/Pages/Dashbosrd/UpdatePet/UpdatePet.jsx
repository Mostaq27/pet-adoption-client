import axios from "axios";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { MdPets } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";



const UpdatePet = () => {
    const {user} = useAuth();
    const [pet, setPet] = useState({});
    const { name, category, age, long_details, short_details, location, photo } = pet || {}
    // console.log('UPDATE pet', pet)
    const { id } = useParams();
    // console.log("udpated id:", id)

    useEffect(() => {
        fetch(`https://pet-adoptation-server.vercel.app/pets/${id}`)
            .then(res => res.json())
            .then(data => {
                setPet(data)
            })
    }, [id])


    const handleUpdatePet = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const age = form.age.value;
        const category = form.category.value;
        const location = form.location.value;
        const short_details = form.short_details.value;
        const long_details = form.long_details.value;
        const photo = form.photo.value;


        // Add the date and time to the form data
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        
            const updateItem = {
                category: category,
                name: name,
                age: age,
                photo: photo,
                location: location,
                short_details: short_details,
                long_details: long_details,
                date: formattedDate,
                adopted: false,
                email: user.email

            }
            // console.log(updateItem)
            const petRes = await axios.patch(`https://pet-adoptation-server.vercel.app/pets/${id}`, updateItem);
            console.log(petRes.data)
            if (petRes.data.modifiedCount > 0) {
                // show success popup
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${name} is Updated to the pet.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        
        // console.log( 'with image url', res.data);


    }

return (
    <>
        <Helmet>
            <title>UpDatePet | PawsNest</title>
        </Helmet>
        <div className="bg-neutral pt-10">
            <div>
                <SectionTitle heading="Update  A Pet" ></SectionTitle>
                <div>
                    <form onSubmit={handleUpdatePet}>
                        <div className="md:flex gap-6">
                            {/* pet name */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Pet Name*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="Pet Name"
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                            {/* pet age */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Pet Age*</span>
                                </label>
                                <input
                                    type="text"
                                    name="age"
                                    defaultValue={age}
                                    placeholder="Pet Age"
                                    required
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="flex gap-6">
                            {/* category */}
                            <div className="form-control w-full my-6">
                                <label className="label mt-2">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select
                                    className="input input-bordered w-full"
                                    name="category"
                                    defaultValue={category}
                                >
                                    <option value="Dogs">Dogs</option>
                                    <option value="Cats">Cats</option>
                                    <option value="Rabbits">Rabbits</option>
                                    <option value="Fishes">Fishes</option>
                                    <option value="Horse">Horse</option>
                                    <option value="Birds">Birds</option>
                                </select>
                            </div>

                            {/* Pet Location */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Pet Location*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Pet Location"
                                    name="location"
                                    defaultValue={location}
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* photo */}
                        <div className="md:flex gap-6">
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Pet Photo*</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    accept=""
                                    defaultValue={photo}
                                    className="file-input w-full max-w-xs" />
                            </div>
                            {/* short details */}
                            <div className="form-control w-full my-6">
                                <label className="label">
                                    <span className="label-text">Short Details*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    name="short_details"
                                    defaultValue={short_details}
                                    className="input input-bordered w-full" />
                            </div>
                        </div>
                        {/* long details */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Long Details*</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered h-24"
                                name="long_details"
                                defaultValue={long_details}
                                placeholder="Type Here"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-6">
                            Update Pet <MdPets className="ml-4"></MdPets>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
)
}

export default UpdatePet;