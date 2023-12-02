
import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import axios from 'axios';
import { BiSolidDonateHeart } from 'react-icons/bi';
import useAuth from '../../../Hooks/useAuth';
import { Helmet } from 'react-helmet';


const image_hosting_key = "f105c5299b1ae3e2883bfdc352d81641";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateDonation = () => {
    const { user } = useAuth();
    const formik = useFormik({
        initialValues: {
            name: '',
            maximumAmount: '',
            lastDate: '',
            photo: null,
            short_details: '',
            long_details: ''

        },
        onSubmit: async (values) => {
            // Add the date and time to the form data
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString();

            // // upload img to imgbb and get an api
            const formData = new FormData();
            formData.append('image', values.photo);
            const res = await axios.post(image_hosting_api, formData, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            // console.log(res.data)
            if (res.data.success) {
                const donationItem = {
                    maximumAmount: values.maximumAmount,
                    lastDate: values.lastDate,
                    photo: res.data.data.display_url,
                    name: values.name,
                    short_details: values.short_details,
                    long_details: values.long_details,
                    date: formattedDate,
                    email: user.email,
                    donatedAmount: 40

                }
                // console.log(donationItem)
                const donationRes = await axios.post('http://localhost:5000/createdonation', donationItem);
                // console.log(petRes.data)
                if (donationRes.data.insertedId) {
                    // show success popup
                    formik.resetForm();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${values.name} is added to the Donation`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            // console.log( 'with image url', res.data);


        }
    })

    return (
        <>
            <Helmet>
                <title>CreateDonation | PawsNest</title>
            </Helmet>
            <div className="bg-neutral">
                <div>
                    <SectionTitle heading="Create A Donation Campaigns" ></SectionTitle>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="md:flex gap-6">
                                {/* maximum amount */}
                                <div className="form-control w-full my-6">
                                    <label className="label">
                                        <span className="label-text">Maximum donation amount*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="maximumAmount"
                                        onChange={formik.handleChange}
                                        value={formik.values.maximumAmount}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.lastDate}
                                        placeholder="Type Here"
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
                                        onChange={formik.handleChange}
                                        value={formik.values.short_details}
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
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
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
                                        type="file"
                                        name="photo"
                                        onChange={(event) => {
                                            // Set the file in formik state
                                            formik.setFieldValue("photo", event.currentTarget.files[0]);
                                        }}

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
                                    onChange={formik.handleChange}
                                    value={formik.values.long_details}
                                    placeholder="Bio"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block mt-6">
                                Create Donation  <BiSolidDonateHeart className='ml-1 text-2xl' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateDonation