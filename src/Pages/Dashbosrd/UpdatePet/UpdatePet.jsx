import axios from "axios";
import { useFormik } from "formik";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SelectDropdown from "../../../Components/SelectDropdown/SelectDropdown";
import { MdPets } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const image_hosting_key = "f105c5299b1ae3e2883bfdc352d81641";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdatePet = () => {
const [pet, setPet] = useState({});
const {name,category,age,long_details,short_details,location} = pet || {}
console.log('UPDATE pet',pet)
    const {id} = useParams();
    console.log("udpated id:",id)
   
    useEffect(()=>{
        fetch(`http://localhost:5000/pets/${id}`)
        .then(res=> res.json())
        .then(data=>{
            setPet(data)
        })
    },[id])

    const options = [
        { value:"Dogs", label: 'Dogs' },
        { value: 'Cats', label: 'Cats' },
        { value: 'Rabbits', label: 'Rabbits' },
        { value: 'Fishes', label: 'Fishes' },
        { value: 'Horse', label: 'Horse' },
        { value: 'Birds', label: 'Birds' }
      ]

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            category: '',
            photo: null,
            location: '',
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
                const updateItem = {
                    category: values.category,
                    name: values.name,
                    age: values.age,
                    photo: res.data.data.display_url,
                    location: values.location,
                    short_details: values.short_details,
                    long_details: values.long_details,
                    date: formattedDate,
                    adopted: false,
                    email: user.email

                }
                const petRes = await axios.patch('http://localhost:5000/pets', updateItem);
                // console.log(petRes.data)
                if(petRes.data.insertedId){
                    // show success popup
                    formik.resetForm();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${values.name} is added to the pet.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            }
            // console.log( 'with image url', res.data);
        

        }
    })
  return (
    <div className="bg-neutral pt-10">
    <div>
        <SectionTitle heading="Update  A Pet" ></SectionTitle>
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="md:flex gap-6">
                    {/* pet name */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Pet Name*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
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
                            onChange={formik.handleChange}
                            value={formik.values.age}
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
                        <SelectDropdown
                        options={options}
                        value={formik.values.category}
                        onChange={value=>formik.setFieldValue('category',value.value)}
                        ></SelectDropdown>
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
                            onChange={formik.handleChange}
                            value={formik.values.location}
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
                    Update Pet <MdPets className="ml-4"></MdPets>
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default UpdatePet;