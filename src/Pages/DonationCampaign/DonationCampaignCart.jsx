import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const DonationCampaignCart = ({pet}) => {
    const {photo, name, maximumAmount, donatedAmount, _id} = pet;
    return (
        <Zoom>
            <div className="relative flex bg-clip-border border border-[#00aaff] rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[350px] flex-row">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                   
                    <img
                        src={photo}
                        alt="card-image" className="object-cover w-56 h-full" />
                       
                </div>
                <div className="p-6">
                    <h6
                        className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 capitalize">
                       Name: {name}
                    </h6>
                    <h4 className="block mb-2 font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                       Maximum Amount: {maximumAmount}$
                    </h4>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                       Donated Amount: {donatedAmount}$
                    </p>
                    <Link to={`/donation_camp_details/${_id}`}>
                    <button
                        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                        type="button">
                        Details<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2" className="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg></button>
                        </Link>
                </div>
            </div>
        </Zoom>
    )
}

export default DonationCampaignCart