
import React from 'react'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const DonationCampDetailsCart = ({pet}) => {
    const {user} = useAuth();
    const {photo, short_details, long_details, name, maximumAmount, donatedAmount, _id} = pet;


    const handleModal = async (e) => {
        e.preventDefault()
        const form = e.target
        const number = form.number.value
        const userLocattion = form.location.value
        const user = form.user.value
        const email = form.email.value
        const donationPet = { userLocattion, number, user, email, photo, name, donatedAmount }
        // console.log(adoptedPet)


        const donationRes = await axios.post('http://localhost:5000/mydonation', donationPet);
        console.log(donationRes.data)
        if (donationRes.data.insertedId) {
            // show success popup
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} is Donated to the pet.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

  return (
    <div>
            <div className='col-span-1 cursor-pointer group'>
                <div className='flex flex-col gap-2 w-[400px]'>
                    <div
                        className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                    >
                        <img
                            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
                            src={photo}
                            alt='pet'
                        />
                        <div
                            className='
              absolute
              top-3
              right-3
            '
                        >

                        </div>
                    </div>
                    <div className='font-semibold text-lg'>Name: {name}</div>
                    <div className='font-light text-neutral-500'>
                        Short Description: {short_details}
                    </div>
                    <div><span className='font-semibold'>Details: </span>{long_details}</div>
                    <div className='flex flex-row items-center gap-4 justify-between'>
                        {/* <div className='font-semibold'>Maximum Amount: {maximumAmount} $</div> */}
                        <p className="font-semibold text-base flex items-center gap-2">
                            Donated Amount: <span>{donatedAmount} $</span>
                        </p>
                    </div>
                    <div className='text-center py-3'>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()}   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Donate Now
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    {/* form return date and borrow date row */}
                                    <form onSubmit={handleModal}>

                                        <div className="md:flex mb-8">
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Phone Number</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="number" placeholder="Your Phone Number" className="input input-bordered w-full" required />
                                                </label>
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Your Location</span>
                                                </label>
                                                <label className="input-group">

                                                    <input type="text" name="location" placeholder="Your Location" className="input input-bordered w-full" required />
                                                </label>
                                            </div>
                                        </div>
                                        {/* form User name and User emaail  row */}
                                        <div className="md:flex mb-8">
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">User Name</span>
                                                </label>
                                                <label className="input-group">

                                                    <input readOnly type="text" name="user" placeholder="User Name" defaultValue={user?.displayName} className="input input-bordered w-full" required />
                                                </label>
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">User Email</span>
                                                </label>
                                                <label className="input-group">

                                                    <input readOnly type="email" name="email" defaultValue={user?.email} placeholder="User Email" className="input input-bordered w-full" required />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="modal-action flex">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button type="submit" className="btn">close</button>
                                            </form>
                                            <input className="btn " type="submit" value="Submit" />
                                        </div>

                                    </form>
                                </div>
                            </dialog>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DonationCampDetailsCart