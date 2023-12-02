import { BiSolidDonateHeart } from "react-icons/bi";
import useAuth from "../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";


const UpdateCampaigns = () => {
    const { user } = useAuth();
    const [pet, setPet] = useState({});
    const { name, lastDate, maximumAmount, long_details, short_details, location, photo } = pet || {}
    // console.log('UPDATE pet', pet)
    const { id } = useParams();
    // console.log("udpated id:", id)

    useEffect(() => {
        fetch(`http://localhost:5000/createdonation/${id}`)
            .then(res => res.json())
            .then(data => {
                setPet(data)
            })
    }, [id])


    const handleUpdateDonation = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const lastDate = form.lastDate.value;
        const maximumAmount = form.maximumAmount.value;
        const short_details = form.short_details.value;
        const long_details = form.long_details.value;
        const photo = form.photo.value;


        // Add the date and time to the form data
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();


        const updateItem = {
            lastDate: lastDate,
            name: name,
            maximumAmount: maximumAmount,
            photo: photo,
            short_details: short_details,
            long_details: long_details,
            date: formattedDate,
            

        }
        console.log(updateItem)
        const petRes = await axios.patch(`http://localhost:5000/createdonation/${id}`, updateItem);
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
                <title>UpdateDonation | PawsNest</title>
            </Helmet>
            <div className="bg-neutral">
                <div>
                    <SectionTitle heading="Update A Donation Campaigns" ></SectionTitle>
                    <div>
                        <form onSubmit={handleUpdateDonation}>
                            <div className="md:flex gap-6">
                                {/* maximum amount */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Maximum donation amount*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="maximumAmount"
                                        defaultValue={maximumAmount}
                                        placeholder="Type Heree"
                                        required
                                        className="input input-bordered w-full" />
                                </div>
                                {/* date */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Last date of donation*</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="lastDate"
                                        placeholder="Type Here"
                                        defaultValue={lastDate}
                                        required
                                        className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div className="md:flex gap-6">
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
                                        required
                                        className="input input-bordered w-full" />
                                </div>

                                {/* Pet Name */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Pet Name*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Type Here"
                                        name="name"
                                        defaultValue={name}
                                        required
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
                                        defaultValue={photo}
                                        required
                                        className="file-input w-full max-w-xs" />
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
                                    required
                                    placeholder="Type Here"
                                >
                                </textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-6">
                                Update Donation  <BiSolidDonateHeart className='ml-1 text-2xl' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateCampaigns;